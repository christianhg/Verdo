# Verdo prototype
Frontend school project

# Docpad:	
Start localhost project:
- cd /Your directory
- docpad run (in terminal/command prompt)
- localhost -> http://localhost:9778/

# Paths:
Images path example: 	
- 'assets/img/pic_name.png'

Stylesheets placed in:
- documents/assets/stylesheets
- *import new stylesheets to main.css 

Scripts placed in: 		
- documents/assets/scripts

# Jade syntax:
http://scalate.fusesource.org/documentation/jade-syntax.html

Attribtes example: 		
- img(src="assets/img/night_sky.png", width="200")
- button(type="button", data-toggle="collapse", data-target=".bs-navbar-collapse")
- a(href="", target="_blank")

Class and ID syntax:
- div#things

  	span#rice Lorem ipsum

  	p.beans The magical fruit

  	h1.class.otherclass#yourid Your text

# Inuit
Grid containers
- .grid-warpper
- .grid

Reverse
- .grid-wrapper--rev

Push
- .push--one-third

Sizes
- palm for handheld devices.
- lap for tablets and netbooks and the like.
- portable for both of the above.
- desk for anything big enough to be deemed stationary.
- usages
- .one-whole  .lap-one-half  .desk-one-quarter


Whole
- .one-whole { width:100%; }

Halves

- .one-half { width:50%; }


Thirds

- .one-third { width:33.333%; }
- .two-thirds { width:66.666%; }


Quarters

- .one-quarter { width:25%; }
- .two-quarters { .one-half; }
- .three-quarters { width:75%; }


* Fifths

- .one-fifth { width:20%; }
- .two-fifths { width:40%; }
- .three-fifths { width:60%; }
- .four-fifths { width:80%; }


Sixths

- .one-sixth { width:16.666%; }
- .two-sixths { .one-third; }
- .three-sixths { .one-half; }
- .four-sixths { .two-thirds; }
- .five-sixths { width:83.333%; }


Eighths

- .one-eighth { width:12.5%; }
- .two-eighths { .one-quarter; }
- .three-eighths { width:37.5%; }
- .four-eighths { .one-half; }
- .five-eighths { width:62.5%; }
- .six-eighths { .three-quarters; }
- .seven-eighths { width:87.5%; }


Tenths

- .one-tenth { width:10%; }
- .two-tenths { .one-fifth; }
- .three-tenths { width:30%; }
- .four-tenths { .one-fifth; }
- .five-tenths { .one-half; }
- .six-tenths { .three-fifths; }
- .seven-tenths { width:70%; }
- .eight-tenths { .four-fifths; }
- .nine-tenths { width:90%; }
