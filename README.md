# Calculator Project

Another project to learn, need to build a functional calculator using JavaScript, HTML, and CSS. The calculator will support basic math operations, handle user input dynamically, and include extra features for enhanced usability.

## Assignment

### [ ] **Basic Calculator Features**
1. **Create Basic Math Functions**
   - [ ] Write functions for the following operations:
     - `add`
     - `subtract`
     - `multiply`
     - `divide`
   - [ ] Test these functions in your browser’s console to ensure they work as expected.

2. **Build an `operate` Function**
   - [ ] Create a function `operate(operator, num1, num2)` that:
     - Accepts an operator and two numbers.
     - Calls one of the basic math functions (`add`, `subtract`, `multiply`, `divide`) based on the operator.

3. **Build the Calculator Interface**
   - [ ] Create an HTML layout for the calculator, including:
     - Buttons for digits (0–9) and operators (+, -, *, /, =).
     - A display area to show numbers and results.
     - A “clear” button to reset the calculator.
   - [ ] Focus on design and layout first—don’t worry about making the buttons functional yet.

---

### [ ] **Making the Calculator Functional**
4. **Populate the Display**
   - [ ] Create a function to update the display when digit buttons are clicked.
   - [ ] Store the current display value in a variable for later calculations.

5. **Implement Core Functionality**
   - [ ] Make the calculator perform operations when:
     - The user inputs the first number.
     - Selects an operator.
     - Inputs the second number.
     - Presses `=` to display the result.
   - [ ] Use the `operate` function to handle calculations.
   - [ ] Update the display with the calculated result.

6. **Handle Sequential Calculations**
   - [ ] Calculate and display the result of the first operation.
   - [ ] Use the result as the starting number for the next calculation.

---

### [ ] **Bug Fixes and Edge Cases**
7. **Ensure Proper Behavior**
   - [ ] Prevent the calculator from evaluating more than one pair of numbers at a time.
   - [ ] Round answers with long decimals to avoid overflowing the display.
   - [ ] Handle division by 0:
     - Display a snarky error message.
     - Prevent crashes or unexpected behavior.
   - [ ] Prevent the `=` button from running calculations when:
     - The user hasn’t entered two numbers and an operator.
   - [ ] Ensure the “clear” button resets the display and stored data completely.
   - [ ] Handle consecutive operator presses:
     - Ignore previous operators and use only the last operator pressed.

---

## Extra Credit

### [ ] **Decimal Input**
- [ ] Add a `.` button to allow users to input decimal numbers.
- [ ] Prevent multiple decimals in the same number (e.g., block `12.3.45`).

### [ ] **Backspace Button**
- [ ] Add a “backspace” button to let users delete the last digit or operator entered.

### [ ] **Keyboard Support**
- [ ] Enable users to interact with the calculator using their keyboard:
  - Support digit keys (0–9).
  - Support operator keys (+, -, *, /, =).
  - Support additional keys like `Enter` (for `=`) and `Backspace` (to undo input).

---