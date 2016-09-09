var movies = [
    {
            title: "Magnum PI",
            author: "Joe Juno",
            year: "1933"
    },
    {
            title: "Star Wars",
            author: "Steven Spielberg",
            year: "1976"
    },
    {
            title: "American Ninja",
            author: "Goofy",
            year: "1933"
    }
]

for (i=0; i<movies.length; i++) {
      document.write(
              "<p>" + movies[i].title + "<i>" + " " + movies[i].author + " </i></p>" + "<br />");
        
}


    

