This project is deployed at [Grady Knight](http://gradyknight.com).

## Purpose of the Site 

Obviously, this is a portfolio site. It is also a place for me to experiment with some architecture patterns that are potentially inappropriate for client work at my day job. 

The three pieces I wanted to explore are:
 - Holding all state in a single data model
 - Using Redux Toolkit to implement redux
 - Having no style sheets


### `Holding all state in a single model`

Outside of my daily work, I'm interested in Elm and Reason. This site is built to mimic the model -> view -> event -> new model cycle from Elm.

Redux is the obvious model to use in React land. To that end, I've implemented all components as functional components. No component holds any form of state. Instead, each component is simply a static render method or a functional component which reads and dispatches to the relevant slice of redux state.

### `Using Redux ToolKit`

[Redux Tool Kit](https://redux-toolkit.js.org) (RTK) was recently released. I wanted to play with it as a test bed before recommending its use at my day job. Specifically, I wanted to evaluate its promises of a) reducing the boilerplate associated with redux, b) organizing state in a logical manner, and c) simplifying the use of TypeScript with redux.

Without going into great detail, RTK absolutely delivers in a) and c). There's still the potential for foot-gunning in b) but it is greatly minified. 

### `No Style Sheets`

I alternate between React and React-Native projects. I find it inconvenient to swap between style sheets (general React projects) and style objects (React-Native). To that end, I wanted to build a React app using only inline styles. I alternated between Material-UI's useStyles hook and simply spreading over a JS object. 

There are drawbacks vs CSS. Theoretically there is a performance hit. I'll save that debate for in-person discussions (this will go better with a beer). The only part of CSS I genuinely missed was media querries. However, with RTK, I added a window resize listener on the parent component and store a boolean in Redux for big/little screen. It would be trivial to change this to a switch with enumerated breakpoints.

The benefit of not using CSS is a much easier transition to React Native. I could see a pattern similar to 'adaptive widgets' in flutter where the parent component inspects the environment and renders either a div or a container.


## Technologies Used

I tried to keep the number of techs to a minimum:

- React
- Redux (Redux Toolkit)
- Material UI

### Performance

This is a big bundle size. I did that because I wanted to simplify my deployment. To that end, I include svgs, pngs, and jpegs in the final bundle. This lets me simply `yarn build` and deploy and host through an Amazon Web Service (AWS) S3 bucket. For a significant app I'd not follow this pattern. For a simple portfolio site, I didn't see this as worth the effort to segment and manage.