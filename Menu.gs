// 34567890123456789012345678901234567890123456789012345678901234567890123456789

// Configuration
// =============

var SCRIPT_NAME = "Timesheet Bound Script"
var SCRIPT_VERSION = "v1.0"


// Menu.gs
// ========
//
// Dev: codlord.com
//
// Code for creating custom Timesheet menu

function onOpen() {

  var ui = SpreadsheetApp.getUi()
  var menu = ui.createMenu('Timesheet')

  menu
    .addItem('Check In',  'checkIn_')
    .addItem('Check Out', 'checkOut_')
    //.addItem('Reset Properties', 'resetProperties_')
    .addToUi()
    
} // onOpen()


function checkIn_() {
  var properties = PropertiesService.getDocumentProperties()
  Timesheet.checkIn(properties, null, properties, LockService.getDocumentLock())
  
} // checkIn_()

function checkOut_() {
  var properties = PropertiesService.getDocumentProperties()
  Timesheet.checkOut(properties, null, properties, LockService.getDocumentLock())
  
} // checkOut_()

function resetProperties_() {
  Timesheet.resetProperties(PropertiesService.getDocumentProperties())
} // resetProperties_()