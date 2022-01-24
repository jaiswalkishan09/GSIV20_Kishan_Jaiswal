# upcoming_movie_search_using_themoviedb

#Project Consist Of:

-two-page web app for browsing and searching movies with the help of
available online API: https://developers.themoviedb.org/3/getting-
started/introduction.

-first pages is List page which display upcoming movies, in movie cards.Each movie card display:

a. Movie media (picture)
b. Movie Title
c. Rating (average vote)
d. Description

-search bar is used for searching movies using the search API. Search results will be
displayed on the List page itself. When search is cancelled, it will revert to
showing all movies again.

-onclick on a movie card, the app will navigate to the Details page
showing movie details. The home button on the Details
page will navigate the user back to the List page. Details page will
display
a. Movie Title
b. Rating (average vote)
c. Year of release
d. Length 
e. Director
f. Cast (Comma separated list of actors)
g. Description

-the whole project is responsive

#Tech Used:

-React Redux,HTML,CSS,Bootstrap

#Instructions About How To Run.

-Clone from github

-open and install the packages(npm install)

-npm start

-consists of two pages listPage(homepage) and detailpage:

-first upcoming Movies were displayed for first page if more pages are available next and previous button will appear at the bottom.

-clicked on next =>movies of the next page will displayed

-onclick =>listed movies item => moves to the detail page

-on the top Navbar search bar is available which begins to search as soon as letters were entered if input field is empty it again starts to show the movies in home page

-in listpage onclick of hompage it will refresh the whole page while in movie detail page it act as a backbutton

-if the search result have many pages than it can navigate using the next button as available in the homepage



