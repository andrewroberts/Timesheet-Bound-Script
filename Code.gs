// JSHint - 30Oct2019
/* jshint asi: true */

var SCRIPT_NAME = 'Timesheet Bound Script'
var SCRIPT_VERSION = 'v1.2'

var PROPERTIES = PropertiesService.getDocumentProperties()
var LOCK = LockService.getDocumentLock()

// Create a menu item to access the sidebar.
function onOpen(e) {

  var menu = ''
  if (e.authMode === ScriptApp.AuthMode.NONE) {
   
      menu = SpreadsheetApp
        .getUi()
        .createMenu('[ Timesheet ]')
        .addItem('Start', 'initialize_') 
        .addToUi()

  } else { // LIMITED or FULL
  
    var triggerOpenId = PropertiesService.getDocumentProperties().getProperty('triggerOpenId')
        
    if (triggerOpenId === null) {
  
      menu = SpreadsheetApp
        .getUi()
        .createMenu('[ Timesheet ]')
        .addItem('Start', 'initialize_') 
        .addToUi()
  
    } else {
    
      var html = HtmlService
      .createHtmlOutputFromFile("index")
      .setTitle("Check In/Check Out");
      SpreadsheetApp.getUi().showSidebar(html)

    }    
  }
}


function onInstall(e){

  var triggerOpenId = properties.getProperty('triggerOpenId')
  
  if (triggerOpenId !== null) {
    properties.deleteProperty('triggerOpenId')
    
  }
    
  onOpen(e)
}

function getStatus() {
  var properties = PropertiesService.getDocumentProperties()
  var status = PROPERTIES.getProperty("TIMESHEET_STATUS")
  
  if (status === "CHECKED_IN"){
    return true
  } else {
    return false
  }
}

function initialize_() {

  var properties = PropertiesService.getDocumentProperties()
  var timesheetId = SpreadsheetApp.getActive().getId()
  
  var triggerOpenId = ScriptApp
    .newTrigger('onOpen')
    .forSpreadsheet(timesheetId)
    .onOpen()
    .create()
    .getUniqueId()
    
  if (properties.getProperty('triggerOpenId') !== null) {
    throw new Error('There is already a trigger Open ID stored')
  }

  properties.setProperty('triggerOpenId', triggerOpenId)

}

function checkIn()  {Timesheet.checkIn (PROPERTIES, null, PROPERTIES, LOCK)}
function checkOut() {Timesheet.checkOut(PROPERTIES, null, PROPERTIES, LOCK)}

