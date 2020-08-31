(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{381:function(e,t,o){e.exports=o.p+"assets/img/1.4939883c.png"},382:function(e,t,o){e.exports=o.p+"assets/img/2.eda7de62.png"},383:function(e,t,o){e.exports=o.p+"assets/img/3.616f3c5c.png"},384:function(e,t,o){e.exports=o.p+"assets/img/4.51fcf749.png"},385:function(e,t,o){e.exports=o.p+"assets/img/5.9619c791.png"},386:function(e,t,o){e.exports=o.p+"assets/img/6.f3ea3238.png"},387:function(e,t,o){e.exports=o.p+"assets/img/7.17e6e506.png"},513:function(e,t,o){"use strict";o.r(t);var n=o(33),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"openpgp-key-generation-using-gpa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#openpgp-key-generation-using-gpa"}},[e._v("#")]),e._v(" OpenPGP Key Generation Using GPA")]),e._v(" "),n("p",[e._v("The following instructions explain the generation of OpenPGP keys directly on the Nitrokey with help of the GNU Privacy Assistant (GPA). You won't be able to create a backup of these keys. Thus, if you lose the Nitrokey or it breaks you can not decrypt mails or use these keys anymore. Please see "),n("a",{attrs:{href:"https://www.nitrokey.com/documentation/openpgp-email-encryption",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(" for a comparison of the different methods to generate OpenPGP keys.")]),e._v(" "),n("p",[e._v("You need to have GnuPG and GPA installed on your system. The newest version for Windows can be found "),n("a",{attrs:{href:"https://www.gpg4win.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(' (make sure to check "GPA" during the installation!). Users of Linux systems please install GnuPG and GPA with help of the package manager (e.g. using '),n("code",[e._v("sudo apt install gnupg gpa")]),e._v(" on Ubuntu).")]),e._v(" "),n("h2",{attrs:{id:"key-generation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#key-generation"}},[e._v("#")]),e._v(" Key Generation")]),e._v(" "),n("p",[e._v('At first, open the GNU Privacy Assistant (GPA). You may are asked to generate a key, you can skip this step for now by clicking "Do it later". In the main window, please click on "Card" or "Card Manager".')]),e._v(" "),n("p",[n("img",{attrs:{src:o(381),alt:"img1"}})]),e._v(" "),n("p",[e._v('Another windows opens. Please go to "Card" -> "Generate key" to start the key generation process.')]),e._v(" "),n("p",[n("img",{attrs:{src:o(382),alt:"img2"}})]),e._v(" "),n("p",[e._v("Now you can put in your name and the email address you want to use for the key that will be generated next. You may choose an expiration date for your key, but you don't have to.")]),e._v(" "),n("p",[n("strong",[e._v("Please do not use the backup checkbox")]),e._v('. This "backup" does only save the encryption key. In case of a loss of the device, you will not be able to restore the whole key set. So on the one hand it is no full backup (use '),n("a",{attrs:{href:"https://www.nitrokey.com/documentation/openpgp-create-backup",target:"_blank",rel:"noopener noreferrer"}},[e._v("these instructions"),n("OutboundLink")],1),e._v(" instead, if you need one) and on the other hand you risk that someone else can get in possession of your encryption key. The advantage of generating keys on-device is to make sure that keys are stored securely. Therefore, we recommend to skip this half-backup.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(383),alt:"img3"}})]),e._v(" "),n("p",[e._v("You will be asked for the admin PIN (default: 12345678) and the user PIN (default: 123456). When the key generation is finished, you can see the fingerprints of the keys on the bottom of the window. You may fill up the fields shown above, which are saved on your Nitrokey as well.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(384),alt:"img4"}})]),e._v(" "),n("p",[e._v("Now you can close the window and go back to the main window. Your key will be visible in the key manager after refreshing. Every application which makes use of GnuPG will work with your Nitrokey as well, because GnuPG is fully aware of the fact, that the keys are stored on your Nitrokey.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(385),alt:"img5"}})]),e._v(" "),n("h2",{attrs:{id:"exporting-public-key-and-keyserver-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#exporting-public-key-and-keyserver-usage"}},[e._v("#")]),e._v(" Exporting Public Key and Keyserver Usage")]),e._v(" "),n("p",[e._v("Although you can start to use your Nitrokey right away after generating the keys on your system, you need to import your public key on every system, you want to use the Nitrokey on. So to be prepared you have two options: You either save the public key anywhere you like and use it on another system or you save the public key on a webpage/keyserver.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(386),alt:"img6"}})]),e._v(" "),n("p",[e._v('Right-click on your key entry in the key manager and click "Export Keys..." to export the public key to a file and/or "Send Keys..." to upload the key to a keyserver.')]),e._v(" "),n("p",[e._v('You can carry the keyfile with you or send it to anyone who you like. This file is not secret at all. If you want to use the Nitrokey on another system, you first import this public key via clicking on "Keys" -> "Importing Keys..." and choosing the file.')]),e._v(" "),n("p",[e._v('If you do not want to carry a public keyfile with you, you can upload it to keyserver. If you are using another machine you can just import it by using "Server" -> "Retrieve Keys..." and entering your name or key id.')]),e._v(" "),n("p",[e._v('Another possibility is to change the URL setting on your card. Open the card manager again and fill in the URL where the key is situated (e.g. on the keyserver or on your webpage etc.). From now on you can import the key on another system by right-clicking on the URL and click on "Fetch Key".')]),e._v(" "),n("p",[n("img",{attrs:{src:o(387),alt:"img7"}})])])}),[],!1,null,null,null);t.default=a.exports}}]);