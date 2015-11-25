# CuraeApp – a web-based health informatics application

This project uses several technologies to provide a simple and useful web application for reviewing a patient’s vital statistics and displaying in chart format useful information about a disease and its relevance to the chosen patient.

For the purposes of this project, only diabetes was represented.


## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

### Prerequisites

You need git to clone the CuraeApp repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

You also need an instance of MS Azure or another cloud hosting service capable of running AngularJS applications.


### Clone CureaApp

Clone the CureaApp repository using [git][git]:

```
https://github.com/joshwhit99/CuraeApp.git
cd CuraeApp
```

If you just want to start a new project without the project commit history then you can do:

```bash
git clone --depth=1 https://github.com/joshwhit99/CuraeApp.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

There are multiple dependencies for the application front end (AngularJS, Bootstrap, and jQuery), but all code is local to the application directory and none need to be installed.

The HAPI FHIR instance used was accessed remotely. A local instance of HAPI FHIR could be installed. Reference the HAPI FHIR documentation for more information at: 

https://github.com/jamesagnew/hapi-fhir.git

## Directory Layout

```
Web/app/                    --> all of the source files for the application
…/app/css			 all of the CSS source files
…/app/js			 all of the js code for the application
…/app/partials			 all of the html files for the application
…/app/angular			 all of the AngularJS JavaScript libraries 
```

## Updating Angular

AngularJS can be updated using bower, but it can also be updated by going to the AngularJS website and downloading the latest version. It would be placed in the Web/app/angular directory. The script reference in Web/app/index.html would also need to be updated.

Alternately, AngularJS can be retrieved from a CDN by replacing the reference to the local directory with a reference to the CDN URL, such as:

```
https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-beta.2/angular.min.js
```

The latest CDN can be obtained from the download option at http://angularjs.org 

## Updating Bootstrap

Bootstrap can be updated by going to the Bootstrap website and downloading the latest version. It would be placed in the Web/app/css directory

Alternately, Bootstrap can be retrieved from a CDN by replacing the reference to the local directory with a reference to the CDN URL, such as:

```
https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css 
```

The latest CDN and installation instructions can be obtained from the following URL:

```
http://getbootstrap.com/getting-started/#download
```

# The following instructions about AngularJS are from the AngularJS template file and contains information about running applications using the AngularJS framework.

## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend serving the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`.


### Running the App during Development

The angular-seed project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just configure your server to serve the files under the `app/` directory.


### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but the general rule is that all you need in production are all the files under the `app/` directory. Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted somewhere they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure out what is the best way to host the static files to comply with the same origin policy if applicable. Usually this is done by hosting the files by the backend server or through reverse-proxying the backend server(s) and webserver(s).




## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server

