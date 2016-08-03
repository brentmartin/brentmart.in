#BrentMart.in
Visit the [live version](http://brentmart.in/).

More documentation detailing version by version changes with code examples and additional gifs soon

## Version 1.0 - Original
<p>&nbsp; Tablet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Desktop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Mobile</p>
<p align="center" margin-bottom="none">
  <img src="gifs/original-medium.gif" height="298"/>
  <img src="gifs/original-large.gif" height="298"/>
  <img src="gifs/original-small.gif" height="298"/>
</p>

## Version 2.0 - JavaScript
<p>&nbsp; Tablet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Desktop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Mobile</p>
<p align="center" margin-bottom="none">
  <img src="gifs/version-a-medium.gif" height="298"/>
  <img src="gifs/version-a-large.gif" height="298"/>
  <img src="gifs/version-a-small.gif" height="298"/>
</p>

The initial update was focused on breaking up the content into digestible chunks. The original version has all the content placed inside one long block, requiring you to seek out information that you want. For instance, if you wanted to look up my **work history**, you would have to scroll past other content before you reached it. Updates for this version breaks up the content using JQuery.

The content can be divided into five sections (skills, jobs, education, results, and interests) with each assigned an id `<div id="skills"></div>`in html to be used as anchors strictly for JavaScript, **not** CSS styling.

Buttons were then created as a list under the introductory content at the top of the site, and given a class `button-off` for initial before they are engaged:
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
<br>

Now to access this, we needed to use JavaScript. First we would need to write some JQuery to find the button, set it up to trigger an action when clicked, find the class, and have that trigger cause an expanding or contracting action.
Using **jobs** as our example, we start by finding the respective child with `.find` for the child in a list of `li`'s. The `#textbox` id is already assigned to the _full_ content that all sections and the intro. Then we set up a trigger event to engage the button when clicked by using `on('click', function() {});`. The entire function looks so:
```javascript
$('#textbox').find('li:nth-child(2)').on('click', function() {
});
```
<br>

Now that we have the button selected and have a trigger event set when clicked, we now need to put in the actions that happen when triggered.
We need to make the content expand, and can do so using a `.fadeToggle()` in JQuery. We find it by traversing up to `#textbox`, and then back down to the anchor tags we set earlier `#jobs` we now have:
```javascript
$('#textbox').find('li:nth-child(2)').on('click', function() {
  $(this).closest('#textbox').find('#jobs').fadeToggle(250);
});
```
But if plan on using a toggle to expand and contract content when the buttons are clicked, then we need to style the button to visually clicked and unclicked. We can do so by creating another class `button-on` to _add_ to the button when its clicked and in the same motion we can _remove_ the `button-off` class that already existed. Now we have:
```javascript
$('#textbox').find('li:nth-child(2)').on('click', function() {
  $(this).toggleClass( 'button-off button-on' );
  $(this).closest('#textbox').find('#jobs').fadeToggle(250);
});
```
and, of course, we would need to style `button-on` as well:
```CSS
.button-on {
	background-color: teal;
	border: 1px solid teal;
	color: white;
  transition: all 100ms linear;
}
```
<br>

At this point we have now broken the content into 5 major chunks, accessible only by engaging buttons.

For this version, I also decided to take it a step further and break down each of the 5 sections into _basic_ information and _detailed_ information, and used a `read more` button to allow that triggering independently in each section, but I'm going to save the specifics of that for the next section.
<br>

## Version 3.0 - Content

<p>&nbsp; Tablet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Desktop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Mobile</p>
<p align="center" margin-bottom="none">
  <img src="gifs/version-b-medium.gif" height="298"/>
  <img src="gifs/version-b-large.gif" height="298"/>
  <img src="gifs/version-b-small.gif" height="298"/>
</p>
<br>
## Version 4.0 - Navigation
<p>&nbsp; Tablet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Desktop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Mobile</p>
<p align="center" margin-bottom="none">
  <img src="gifs/version-c-medium.gif" height="298"/>
  <img src="gifs/version-c-large.gif" height="298"/>
  <img src="gifs/version-c-small.gif" height="298"/>
</p>
