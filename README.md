# Compare Excel and CSV Files

An interactive web application for comparing Excel and CSV files based on selected criteria. The application allows you to upload two files, map columns (even if the columns have different names), and display matching entries.

## Features

- **Support for Excel and CSV Files**: Upload files in `.xlsx` or `.csv` format.
- **Delimiter Selection for CSV Files**: Choose delimiters for each CSV file individually.
- **Column Mapping**: Map columns from the base file to columns in the comparison file, even if they have different names.
- **Comparison of Multiple Criteria**: Select multiple columns for a more precise comparison.
- **Error Handling**: The application includes enhanced error checks and provides clear error messages.
- **Responsive Design**: The user interface adapts to different screen sizes, making it usable on mobile devices as well.
- **User-Friendly Design**: Colors and styling ensure a clear and user-friendly application.
- **Async File Handling and Lazy Loading**: Uses asynchronous file handling for better performance and lazy loading to efficiently manage large datasets.

## Requirements

- **Web Browser**: A modern web browser like Chrome, Firefox, Edge, or Safari.
- **Internet Connection**: Required for loading the external SheetJS library.

## Installation

1. **Download Project**: Clone the repository or download the files.
2. **Verify Files**: Make sure the following files are present:
    - `index.html` (contains HTML, CSS, and JavaScript)
    - `README.md`
    - `.gitignore`
    - `assets/data`

## Usage

1. **Start the Application**:
    - Open the `index.html` file in your web browser. You can do this by double-clicking on the file or dragging it into the browser.
2. **Select File Type**:
    - Choose the desired file type (Excel or CSV) at the top of the page.
3. **Set Delimiter (for CSV only)**:
    - If you are using CSV files, enter the appropriate delimiters for the base file and the comparison file.
4. **Upload Files**:
    - Click on "Upload Base File" and select your first file.
    - Click on "Upload Comparison File" and select your second file.
5. **Map Columns**:
    - After both files are loaded, the "Column Mapping" section will appear.
    - Map columns from the base file to the corresponding columns in the comparison file using the dropdown menus.
6. **Run the Comparison**:
    - Click the "Compare" button to start the comparison.
7. **View Results**:
    - The matching entries will be displayed in a table below the button.
    - If no matches are found, an appropriate message will be shown.

## Example

Suppose you have two files with customer data, but the columns have different names:

- **Base File (base.xlsx or base.csv)**:
    - Customer Number
    - First Name
    - Age
    - City

- **Comparison File (compare.xlsx or compare.csv)**:
    - ID
    - Name
    - Years
    - Town

### Column Mapping:

- First Name (Base File) to Name (Comparison File)
- City (Base File) to Town (Comparison File)

### Comparison Criteria:

- Select the columns First Name and City as criteria.

### Result:

- The entry for Clara from Hamburg will be recognized as matching and displayed.

### Error Handling

- **Invalid Files**: The application checks if valid files are uploaded and provides error messages if not.
- **Missing Columns**: If the mapped columns are missing in either of the files, a corresponding message is displayed.
- **General Errors**: Unexpected errors during reading or processing data are caught and shown as messages.
- **Data Types**: The application converts values to strings to ensure methods like `.toLowerCase()` work properly. If you encounter problems, check your data for unusual formats or values.
- **Character Normalization**: Special characters such as underscores (`_`), single quotes (`'`), and double quotes (`"`) are stripped from values to ensure a more precise and consistent comparison.

### Known Challenges

- **Large Files**: For very large files, processing may take some time, and the application may respond more slowly.
- **Browser Compatibility**: The application has been tested with modern browsers. Limitations may occur with older browsers.
- **Files with Special Characters**: Ensure your files are UTF-8 encoded to avoid issues with special characters.
- **Different Delimiters**: The application supports different delimiters for the base and comparison file, but make sure they are entered correctly.

### License

This project is licensed under the MIT License. For more details, see the `LICENSE` file.