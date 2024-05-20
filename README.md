# Voice123 Test

## Application Setup Guide

### Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed [Node.js](https://nodejs.org/) (version 20.x or later).
- You have a package manager installed (npm or yarn).

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/jscortes523/voice123-test.git
    cd voice123-test
    ```

2. Install dependencies:

    Using npm:
    ```bash
    npm install
    ```

    Or using yarn:
    ```bash
    yarn install
    ```
### Running the Application

1. To start the development environment:
    ```bash
    npm run dev
    yarn dev
    ```
2. To start the production environment:
    ```bash
    npm run start
    yarn start
    ```

## Worklog

###  Day 1

1. Frameworks and tools selection (3 hour)
    
    - ReactJs + Redux, and NodeJS attempt
    - NextJS + Material UI + Tailwind.

2. Project setup and initial environment configuration (3 hours)
    
    - Set up the repository and project structure.

    - Identifying and installing dependencies, specially Material UI ones.

    - Dealing and understanding Material UI issues

    - **.eslintrc.json** settings.


3. Implemented basic layout and Header (3h)
    - Set up **layout.js**

    - Created and styled Header component

    - Connected Header actions to search params

    - Fetched initial data on Home page load

        * Identified **Voice123 API**  response and query string limits

4. Implementing and styling first version of Search result component (1h)

5. Implementing and styling Audio Player component (4h)
    - Created Media player using Material UI Icon button components

    - Connected useRef hoook to trigger an action in the Media card component
        * **NOTE:** Most of the sample file URLs in API response are incompleted or broken, I only found these users with a valid URL **5000035** and **240582**, for this reason I hard code a URL inside Audio Player component.
    
    - Added custom styles to Icon button component

    - Created function to identify and hihglight the first paragraphs where the keyword was found.
        * **NOTE:** summary and additional_details properties in the API response were taken as content to be displayed, the reason, some of the results in the query didn't meet the keyword filter.
        e.g. keyword=game and page=1, the user id **123422** doesn't match the keyword in any of its properties and it is fethed by the query.


### Day 2
1. Implementing and styling Pagination and No result component(2h)
    - Implemented Material UI Pagination component
    - Got API headers to set the paginations number of page based on the keyword filter
    - Styled component overriting the **Mui-selected** class and using aria-curret property to identify the selected page
    - Added No result component

2. Improving styling in Audio player, Profile summary, Pagination componentns, and Home (1h)
3. Documentation (2h)

## Future Improvements and Recommendations

### Improvements

* Enhanced Error Handling, and not found response, for a better user experience

* Storybooks, for testing, reusability, documentation, and collaboration

* API request parameters restrictions. The API allows the **size** as a parameter, and a big value breaks the server response, it can impact server performance, and service availability

* Additional features, such as, sorting, more filters options, page size selector 

### Recomendations

* Set up a CI/CD pipeline to automate testing and deployment processes.

* Implement regular code reviews to maintain code quality and share knowledge among team members.

* Maintain comprehensive documentation 