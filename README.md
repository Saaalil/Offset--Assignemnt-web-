# Carbon Credits Dashboard

A React-based dashboard for viewing and managing carbon credits with search functionality and certificate generation.

## Setup Instructions

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Features

- Display carbon credits from JSON data
- Search/filter by project name or vintage
- Status badges (Active/Retired)
- Download retirement certificates

## Reflection Questions

### How did you decide what to show on the main page vs details?

I decided to show the essential information on the main page - project name, UNIC ID, vintage, and status. This gives users a quick overview of each credit without cluttering the interface. I considered adding a separate details page but felt that for this dataset size, showing all info on cards was sufficient.

// TODO: might want to add modal or separate detail view for larger datasets

### What design choices did you make to keep it clean?

- Used a card-based layout for easy scanning
- Limited color palette (green for active, gray for retired)
- Consistent spacing and typography
- Clear visual hierarchy with project names as headers
- Simple search bar at the top

// Areas I could improve:
// - Add loading states
// - Better responsive design
// - More consistent button styling

### If the system had 10,000 credits, how would you keep the dashboard fast?

For 10,000 credits, I would implement:

1. **Pagination** - Show 20-50 credits per page
2. **Virtual scrolling** - Only render visible cards
3. **Search optimization** - Debounced search input
4. **Data optimization** - Load minimal data initially, fetch details on demand

```javascript
// Example pagination implementation I'd add:
// const [currentPage, setCurrentPage] = useState(1);
// const creditsPerPage = 50;
// const startIndex = (currentPage - 1) * creditsPerPage;
// const paginatedCredits = filteredCredits.slice(startIndex, startIndex + creditsPerPage);
```

## Known Issues / TODO

- [ ] Add loading states for certificate generation
- [ ] Implement proper error handling
- [ ] Add unit tests
- [ ] Improve responsive design for mobile
- [ ] Add pagination for large datasets
- [ ] Consider adding PDF generation instead of HTML

## Technologies Used

- React 18
- CSS3
- HTML5 Certificate Generation

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
