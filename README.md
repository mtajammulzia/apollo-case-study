# Apollo Case Study for Frontend

## Introduction:
This is a React + TypeScript project, bootstrap with Vite. I did not go with Next.js as there aren't many features of Next that can be utilized in this particular use case.

### About the app:
I opted for JSON Placeholder API. Pages for analytics, list users, list albums, list todos, user details, album details are added. All listing pages have sorting and filtering with search added to them.

### Assumptions:
User credentials are not validated nor authenticated, can be logged in with any username and password. Login status is persisted in session storage.

### Challenges:
No big challenge, one small thing was to handle sidebar state (open, close) while switching between pages. This could have been done with saving state in session storage and making a context. However, I opted for a more sophistacated solution with react-router-dom v6's ```<Outlet />``` component. Check router for further details.

## Running the app:
There aren't any configurations that need to be made or any sensitive environment variables. Therefore running the app is straightforward:

- Clone the repository by
```git clone https://github.com/mtajammulzia/apollo-case-study.git```

- Go to the project directory
```cd apollo-case-study```

- Install project dependencies
```yarn```
or
```yarn install```

- Run the development server
```yarn dev```

- Build and run via bundle
```yarn build```

## Running tests:
I have added sample tests for Dashboard and Signin page, other pages follow similar pattern.

- Running tests
```yarn test```
