Discovery Test - SPA

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

*Ebay API had cors issues, so I had to take some time to create a proxy to get the data (setupProxy.js)**

### Enhancements
If given more time, I would have donethe following: 

-provided more ebay specific detail for the Item detail page;
-declare default/propTypes (I added them in one  component)
- write unit tests for components
-add in a loader so on any network requests for data, or state changes ,the loader will display . until the request fulfills and the components render with new state.
-I feel like I can always clean up redux flow to no end..lol
- spend some time tweaking the UI from a css perspective
- add prettier to the app so on save, the editor will automatically format the code
-potentially clean up the proxy
