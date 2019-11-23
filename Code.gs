// JSHint - 30Oct2019
/* jshint asi: true */

var SCRIPT_NAME = 'Timesheet Bound Script'
var SCRIPT_VERSION = 'v1.2'

var PROPERTIES = PropertiesService.getDocumentProperties()
var LOCK = LockService.getDocumentLock()

// Create a menu item to access the sidebar.
function onOpen() {Timesheet.onOpen(PROPERTIES)}
function initialize() {Timesheet.initialize(PROPERTIES)}

function checkIn()  {Timesheet.checkIn (PROPERTIES)}
function checkOut() {Timesheet.checkOut(PROPERTIES)}

// Client side 
function isCheckedIn() {return Timesheet.isCheckedIn(PROPERTIES)}

function test() {
  Logger.log(PropertiesService.getDocumentProperties().getProperties())
}