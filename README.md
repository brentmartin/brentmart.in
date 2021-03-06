BrentMart.in
================
A personal portfolio site. Visit the [live version](http://brentmart.in/).

Description
-----------
This is an overhaul of the original portfolio site. I made this a project on GitHub so that I had a place to practice dev skills with code that is shipped regularly. The README serves as a **technical summary of the changes** made to the site as I make them with an explanation of how they were made. It is **exhaustive** in nature.

Versions
-----------
It has been shipped in 3 iterations, and still holds the code for each version in the repository:
- [Version 2.0](https://github.com/brentmartin/brentmart.in#version-20---javascript) - The addition of JavaScript/JQuery
- [Version 3.0](https://github.com/brentmartin/brentmart.in#version-30---content) - Changes in content, colors, and background
- [Version 4.0](https://github.com/brentmartin/brentmart.in#version-40---navigation) - Improved UI with a nav bar and more media queries

Content
-----------
So far, this primarily shows JavaScript/JQuery. The goal to learn something _ground level_ with JavaScript before working with something more _high level_ like React or Angular.

Questions of comments
-----------
Please feel free to send me an [email](mailto:bmart35@gmail.com), or [tweet](https://twitter.com/brentofdamartin) me.

Additional notes
-----------
This README is **still being worked on before** it reaches a point of only being updated at version release, so please understand updates will happen often until then.

Some of the code examples have been slightly modified from the actual code in order to _explain concepts_ better. Forgive me :)

Enjoy!
<br>
<br>
***
<br>
<br>
Version Documentation
================
<br>
## Original
<p>&nbsp; Tablet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Desktop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Mobile</p>
<p align="center" margin-bottom="none">
  <img src="gifs/original-medium.gif" height="298"/>
  <img src="gifs/original-large.gif" height="298"/>
  <img src="gifs/original-small.gif" height="298"/>
</p>
<br>
<br>
***
<br>
<br>
## Version 2.0 - JavaScript
<p>&nbsp; Tablet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Desktop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Mobile</p>
<p align="center" margin-bottom="none">
  <img src="gifs/version-a-medium.gif" height="298"/>
  <img src="gifs/version-a-large.gif" height="298"/>
  <img src="gifs/version-a-small.gif" height="298"/>
</p>

<br>
### What's in this version
The initial update was focused on breaking up the content into digestible chunks. The original version has all the content placed inside one long block, requiring you to seek out information that you want. For instance, if you wanted to look up my **work history**, you would have to scroll past other content before you reached it. Updates for this version breaks up the content using JQuery.

The content can be divided into five sections (skills, jobs, education, results, and interests) with each assigned an id `<div id="skills"></div>`in html to be used as anchors strictly for JavaScript, **not** CSS styling.

<br>
### How its done
This is all done by adding in html elements, styling them, giving them classes and then using JavaScript/JQuery to make those elements interact like a button.

#### Class Buttons
In the HTML, buttons were then created as a list under the introductory content at the top of the site, and given a class `button-off` for initial before they are engaged:
```html
<ul>
  <li class="button-off">skills</li>
  <li class="button-off">work</li>
  <li class="button-off">education</li>
  <li class="button-off">results</li>
  <li class="button-off">interests</li>
</ul>
```
And then styled:
```CSS
.button-off {
	font-family: 'Oswald', Helvetica, sans-serif;
	font-size: .75em;
	font-weight: 400;
	background-color: white;
	border: 1px solid #707070;
	border-radius: 3.75em;
	color: #848484;
	display: inline-block;
	line-height: 1;
	padding: 0.4em 1.2em;
	transition: all 100ms linear;
}
```

Now to access this, we need to use JavaScript. We'll start by writing some JQuery to find the button, set it up to trigger an action when clicked, find the class, and have that trigger cause an expanding or contracting action.

Using **jobs** as our example, we find the respective child by using `.find` on the list of `li`'s. The `#textbox` id is already assigned to the _full_ content that all sections and the intro. Then we set up a trigger event to engage the button when clicked by using `on('click', function() {});`. The function starts by looking like so:
```javascript
$('#textbox').find('li:nth-child(2)').on('click', function() {
});
```

With the button selected when a trigger event set when clicked, we need to put in the actions that happen when triggered.

We can make the content expand by using a `.fadeToggle()` in JQuery. We find it by traversing up to `#textbox`, and then back down to the anchor tags we set earlier `#jobs` we now have:
```javascript
$('#textbox').find('li:nth-child(2)').on('click', function() {
  $(this).closest('#textbox').find('#jobs').fadeToggle(250);
});
```

But if we plan on using a toggle to expand/contract content when the buttons are clicked, then we need to style the button to reflect that as well. We can do so by creating another class `button-on` to _add_ to the button when its clicked and in the same motion we can _remove_ the `button-off` class that already existed. Now we have:
```javascript
$('#textbox').find('li:nth-child(2)').on('click', function() {
  $(this).toggleClass( 'button-off button-on' );
  $(this).closest('#textbox').find('#jobs').fadeToggle(250);
});
```
And, of course, we would need to style `button-on` as well:
```CSS
.button-on {
	background-color: teal;
	border: 1px solid teal;
	color: white;
  transition: all 100ms linear;
}
```

At this point we have now broken the content into 5 major chunks, accessible only by engaging buttons.


#### Read More Buttons

<br>
<br>
***
<br>
<br>
## Version 3.0 - Content
<p>&nbsp; Tablet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Desktop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Mobile</p>
<p align="center" margin-bottom="none">
  <img src="gifs/version-b-medium.gif" height="298"/>
  <img src="gifs/version-b-large.gif" height="298"/>
  <img src="gifs/version-b-small.gif" height="298"/>
</p>
<br>
### What's in this version

The main changes in this version have to do with the content, and the changes to the background. The content was fully revised when this version was released. If you're interested in reading the content, its can be seen in the current [live version](http://brentmart.in/).

#### Style changes for content
The main style change was made to the **background**. In earlier versions, the background was shown by using an `<div>` with an id of `#topimg` and an `<img>` tag inside of it linking the image in the directory.
```HTML
	<div id="topimg">
		<img src="images/coffee.jpg" width=100%>
	</div>
```
and styled in CSS as so:
```CSS
#topimg {
	z-index: -3;
	position:relative;
	float:left;
	width:100%;
	margin: 0px;
	padding: 0px;
	margin-bottom:-3px;
}
```

I should mention here that the original version was designed using [mobile-first design](http://bradfrost.com/blog/web/mobile-first-responsive-web-design/)

So this was styled for mobile viewing, _not_ for desktop viewing. For desktop viewing, the `#topimg` was simply set to `display: none;` and additional CSS styling for the `<html>` tag was added with the image in it - allowing the image to now be a background, rather than set at the top.

This is all happening within the [media query](https://en.wikipedia.org/wiki/Media_queries) set for the desktop version, and looks like so:
``` CSS
@media all and (min-width: 1025px)
{
  #topimg {
    display:none;
  }

  html {
  	background: url('images/coffee.jpg') no-repeat center center fixed;
    	-webkit-background-size: cover;
    	-moz-background-size: cover;
    	-o-background-size: cover;
   	background-size: cover;
	}
}
```

The change for this was relatively simple, we just replaced the `#topimg` with a `<div>` that has class of `.top-picture`and the new `<img>` tag inside of that.

For the desktop version, we placed another version in a `<div>` tag that had a `background-image: url()` set to the new photo, that way if we disable `.top-picture` it would show up.

Finally, we added a couple of overlays are added over it with classes `.overlay-grayscale` and `.overlay`that would show up for either image.

HTML:
```HTML
<body>
  <div class="picture" style="background-image: url(images/light.jpg)"></div>
  <div class="overlay-grayscale"></div>
  <div class="overlay"></div>

	<div class="top-picture">
		<img src="images/light.jpg" width=100%>
	</div>
</body>
```

CSS:
```CSS
.top-picture {
	background-size: cover;
	background-repeat: no-repeat;
	position:relative;
	float:left;
	width:100%;
	margin: 0px;
	padding: 0px;
	margin-bottom:-3px;
	z-index: -5;
}
```

and finally for the desktop version (note: the `.picture` class is styled in the HTML, so it will not be in the CSS)
```CSS
@media all and (min-width: 1025px)
{
  .top-picture {
    display:none;
  }
}
```

<br>
<br>
***
<br>
<br>
## Version 4.0 - Navigation
<p>&nbsp; Tablet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Desktop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Mobile</p>
<p align="center" margin-bottom="none">
  <img src="gifs/version-c-medium.gif" height="298"/>
  <img src="gifs/version-c-large.gif" height="298"/>
  <img src="gifs/version-c-small.gif" height="298"/>
</p>
