# Tweet Collector Extension
## A Chrome Extension to get the original Tweet while replying to it (inside the reply text-area)
## How to use it?
1. Download all the files
2. Put them inside the folder
3. Open Extensions tab of your broweser
4. Turn on the Developer Mode
5. Click on "Load Unpacked" button and choose the folder you have stored all the files in
6. And Done. Now everytime you open a twiiter page which have a reply box, a button will show up just right to the "Reply" button.
7. Click it collect the orginal tweet.

## Problems Faced and Things Learnt
1. Have never built a extension, so understaning how things work in case of extensions was a good learning.
2. Understanding how Manifest.json works. How many type of script can be there. How to get the source DOM.
3. How to listen if the element we are trying to manipulate has been loaded or not?
4. How to re-run the process when the route changes, especially when Twitter is a SPA.
5. How to re-run the process where there is a hard reload of the page.

## Bugs
1. Twitter sometime change the reply box's source structure. Sometimes it is a textarea and sometimes it is a deeply nested div. And with my limited time I couldn't figure out the pattern of this chnages. So, sometime the "Collect" might not work at all but a refresh or two, will fix it.