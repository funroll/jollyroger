jollyroger
==========

# Overview

jollyroger is a Google Chrome Extension to kill processes without closing tabs. It uses the [experimental processes api](https://developer.chrome.com/extensions/experimental.processes.html).

When you click the icon, jollyroger will loop through all open tabs (in all windows) and kill the associated processes. This preserves your windows and the tabs contained therein, but improves overall system performance by reducing CPU and (especially) memory consumption.

The killed tabs can be refreshed to bring them back to life, so you don't lose your work.

Beware that other Chrome Extensions will probably be killed along with tab rendering processes.

# Installation

## Enable Experimental Extension APIs
- In a new tab, enter `chrome://flags` in the address bar
- Scroll down to "Experimental Extension APIs"
- Click "Enable"
- Restart Chrome

## Install the jollyroger Extension
- Click [here](https://github.com/funroll/jollyroger/blob/master/jollyroger.crx?raw=true) to download the .crx file
- Click the wrench icon --> Tools --> Extensions
- Drag the downloaded jollyroger.crx file into the body of the Extensions page

Now you're ready to reclaim memory and processing power from tabs you're not actively using. 

# LICENSE
This code is licensed under the MIT License:

Copyright (c) 2012 Peter Jenkins

Permission is hereby granted, free of charge, to any person obtaining a 
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
