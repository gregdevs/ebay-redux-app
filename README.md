Discovery Test - SPA
<img width="1762" alt="Screen Shot 2019-10-16 at 11 54 54 AM" src="https://user-images.githubusercontent.com/3936775/66936584-f65b5d00-f00b-11e9-9e6d-f7bd516ec9bc.png">

## Available Scripts

In the project directory, you can run:
### `npm install`
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### User Flow
This app makes use of the ebay find api's;

Available Paths: 

`/`    -  by default, request's data for 'funco pop marvel';

`/item/{id}` - detail page for specificied item;

`/item/featured/{keywords}` - a little bonus I threw in;

Click on an item from `/` to navigate to the Item Detail page. 

*Ebay API had cors issues, so I had to take some time to create a proxy to get the data (setupProxy.js)**

### Enhancements
If given more time, I would have done the following: 

-provided more ebay specific detail for the Item detail page;

-declare default/propTypes (I added them in one  component);

-write unit tests for components;

-general code cleanup; check for duplication, see what other pieces of markup that is shared could be componetized

-add in a loader so on any network requests for data, or state changes ,the loader will display . until the request fulfills and the components render with new state;

-I feel like I can always clean up redux flow to no end..lol;

-spend some time tweaking the UI from a css perspective;

-add prettier to the app so on save, the editor will automatically format the code;

-potentially clean up the proxy



