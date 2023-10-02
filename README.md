# Code challenge

This project requires node 16+ to build and run  
`pnpm` is recommended as the package manager    

As defined in the preferences, built without any third-party state management libraries

## Dependencies

In the root directory, install dependencies with `pnpm i`

## env file

As a bit of fun, before loading GIFs will be possible,the `.env` file with the API key needs to be created  
To do so, in the project root directory, in the terminal, enter `./node_modules/.bin/dotenvenc -d -o .env gFDG5]@Zq?wpHx8h`
The `.env` file with the API key will be created

* Dependencies will need to be installed before this is done

## Run

In the root directory, run via `pnpm run dev`

## Status

I added basic pagination to the trending page, and elected not to include it on the search page

Due to time constraints, I didn't get as far as including the optional improvement of saving and unsaving GIFs  
I included localstorage usage with the intention of later using it further for that purpose, and also to limit API requests during development, when changing routes and particularly for hot reloading. It remains in place for the latter use, but elected not to continue with the saving feature due to time

I would also have delved further into testing had time allowed

In hindsight, my focus was spend more in pursuit of some optional improvements where it would otherwise be spent on the core features / tests were the goal not to do as much as possible in limited time

