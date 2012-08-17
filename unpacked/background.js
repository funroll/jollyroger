// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  queryInfo = new Object();
  chrome.tabs.query(queryInfo, function(result) {
    var i=0;
    for (i=0; i < result.length; i += 1) {
	chrome.experimental.processes.getProcessIdForTab(result[i].id, function(processId) {
	    chrome.experimental.processes.terminate(processId);
	});
    }
  });

});


