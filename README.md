Here is a simple `README.md` for your Node.js script:

```markdown
# Todo CLI

A simple command-line interface (CLI) application to manage your todo list using Node.js. This script allows you to add, list, mark as done, and delete todos stored in a JSON file.

## Prerequisites

- Node.js installed on your system

## Installation

1. Clone the repository or download the script.
2. Make sure you have a `data.json` file in the same directory as the script. If it doesn't exist, create it with an empty array:

```json
[]
```

3. Install any required dependencies by running:

```bash
npm install
```

## Usage

### Commands

- **Add a new todo:**

```bash
node todo.js add "Your new todo"
```

This command will add a new todo item to the `data.json` file and assign it a unique ID.

- **List all todos:**

```bash
node todo.js list
```

This command will list all the todos in the `data.json` file.

- **Mark a todo as done:**

```bash
node todo.js done <id>
```

This command will mark the todo with the specified ID as done.

- **Delete a todo:**

```bash
node todo.js delete <id>
```

This command will delete the todo with the specified ID from the `data.json` file.

- **Test the script:**

```bash
node todo.js test
```

This command will simply print "testing" to the console. It's useful for verifying that the script runs correctly.

### Examples

1. **Add a todo:**

```bash
node todo.js add "Finish homework"
```

2. **List all todos:**

```bash
node todo.js list
```

3. **Mark a todo as done:**

```bash
node todo.js done 1
```

4. **Delete a todo:**

```bash
node todo.js delete 1
```

## Note

- The `data.json` file should be in the same directory as the script.
- The todos are stored in a JSON format in the `data.json` file.

## License

This project is licensed under the MIT License.
```

This `README.md` provides a clear overview of how to use your todo CLI, including the necessary commands and examples.