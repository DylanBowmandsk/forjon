# forjon
Quick web app to display data via percentages

# Running application
to run the app from the api directory type into console "node index.js"
then from the root directory "npm start"

the api should start of port 3001 and the main application can be viewed on 3000

#Notes
Before i started i had already decided i was going to use express and make API calls.
I hadnt immediately landed on react and was exploring using just javascript. but that didnt last long.

I was indecisive how i wanted to catalogue the data. i wasnt sure if i wanted to use ID's to access determined array indexes such as:

id 1 == array[0]
and store objects from there, updating the interactions count inside the object while iterating the json data.

but i settled on just compiling a names list and running a for each to count the interactions matched with the names that appeared.

as always im sure there was a way easier way to do it and i will be thinking about it for a while until someone points it out.

the program does check for null values before it updates the UI, this is because the fetch function is asyncronous and somtimes it doesnt fetch the data faster than the elements are built. leading to errors such as "cannot iterate undefined" and such

#Improvements

aside from refactoring the loops and messing about with naming conventions the data is handled pretty well

The application uses react but it doesnt utilise it. react shines when using it as a component based architecture. seperating concerns into modular self contained  easily digestible parts. Something clearly missing from the design on my application.
It could be refactored into components but you asked not to spend a lot of time on it so i thought just leaving it in a single component would be fine.

The API doesnt use the ID's but they have been left in anyway for no apparent reasons. thats obviously a security risk in production.
more endpoints could be created easilly using express. it is quite similar to laravel

theres deffinetaly room for the application to grow as far as architecture goes but it still needs improvement.

Design isnt my strong point in small time frames. i know a lot of design fundamentals and know how to implement nice UI's but it takes me a little bit longer. some graphs and icons would of been a strong and important addition however.

anyways hope you liked it and im open to feedback
