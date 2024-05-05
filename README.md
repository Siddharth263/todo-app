# Simple Next(React) To-Do Application

## Objective

The objective of this project is to develop a basic To-Do application using ReactJS, Next.js, Tailwind CSS, Redux, and Shadcn UI to demonstrate understanding of foundational web technologies and essential React concepts. The application should allow users to add, view, and delete tasks.

## Requirements

### Frontend Development

- Utilize Next.js for server-side rendering and optimized performance.
- Use Tailwind CSS for styling. Tailwind CSS provides utility classes for rapid UI development.
- Implement the application logic using JavaScript (ES6 or later).

### React Components

- Develop the application using functional components and demonstrate the use of React hooks (`useState`, `useEffect`).
- The application should have at least two components:
  - TaskInput: A component for adding a new task.
  - TaskList: A component for displaying the list of tasks.

### State Management

- Use Redux to manage the application's state, including storing tasks and updating the state when adding or removing tasks.
- Implement actions and reducers to handle the state logic.

### Functionality

- **Add Task**: Users should be able to input a task into a text field and add it to the list by pressing a button or pressing Enter.
- **View Tasks**: Display all added tasks in a list format.
- **Delete Task**: Each task should have a delete button that, when clicked, removes the task from the list.

### Bonus (Optional)

- **Mark Task as Completed**: Add the capability to mark tasks as completed without deleting them. This could involve toggling the task's state and styling.
- 

## Usage

1. Clone the repository: `git clone https://github.com/Siddharth263/react-todo-app.git`
2. Go into the project directory: `cd simple-react-todo`
3. Install dependencies:
    - Next.js: This is typically installed as a development dependency in your project. `npm install next react react-dom`
    - Tailwind CSS: Tailwind CSS can be installed using npm. `npm install tailwindcss postcss autoprefixer`
    - Shadcn-Ui: Shadcn-Ui can be installed
        - `npx shadcn-ui@latest init`
        - for the components used run the following command: 
            `npx shadcn-ui@latest add button`
            `npx shadcn-ui@latest add input`
            `npx shadcn-ui@latest add table`
            `npx shadcn-ui@latest add toast`
4. Run the application: `npm run dev`

## Author

- Built with ❤️ by [Priyanshu](https://github.com/Siddharth263/).