var SCRIPT_NAME = 'Timesheet Bound Script'
var SCRIPT_VERSION = 'v1.1'

var PROPERTIES = PropertiesService.getDocumentProperties()
var LOCK = LockService.getDocumentLock()

function onOpen() {

  SpreadsheetApp
    .getUi()
    .createMenu('[ Timesheet ]')
    .addItem('Check In',  'checkIn')
    .addItem('Check Out', 'checkOut')
    .addToUi()
    
} // onOpen()

function checkIn()  {Timesheet.checkIn (PROPERTIES, null, PROPERTIES, LOCK)}
function checkOut() {Timesheet.checkOut(PROPERTIES, null, PROPERTIES, LOCK)}