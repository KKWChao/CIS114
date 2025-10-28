# Homework 5 Arrays

## What you will do:

- You will create a main web page for Homework 5 with:
  - a heading such as Homework 5 - Arrays
  - a hyperlink for part 1 with a short description of the part 1
  - a hyperlink for part 2 with a short description of the part 2
  - a hyperlink to the main page of the course - Homework 1 web page
  - DO NOT USE ALERT BOXES FOR ERROR MESSAGES OR OUTPUTS/RESULTS!

### For Part 1:

- Create a web page for part 1 with:

  - a heading
  - a hyperlink to go back to the main Homework 5 page
  - a form that will contain:
  - an input text box so the user will enter his/her full name
  - a group of radio buttons so the user will select his age group (less than 21; between 21 and 50; older than 50)
  - a group of checkboxes so the user will select the browsers he/she has used (Firefox, Edge, Chrome, Safari)

  TIP: when building radio buttons and checkboxes in HTML, make sure that the name attribute has the same value to all radio buttons in the group and the same value to all checkboxes in the group but, of course, the id attribute should have a different value for each element

  - a select element or datalist (to produce a drop-down list of choices) so the user will select which type of movie he/she prefers (Action, Comedy, Drama, Documentary, Science Fiction)
  - a button to submit the form
  - a button to clear the form
  - a div or paragraph element that will serve as the output/result area (it can be outside the form)

- For that page, you will code a script that:

  - Will validate whether the user has entered data in the input text box, AND has checked one of the radio buttons, AND has checked at least one checkbox, AND has selected an option from the list of options in the select (or datalist) element.
  - If one of the data, from the user, is missing, you will show an error message in the output area

  TIP: Make sure that if you display an error message because of a single field, you do not clear out the whole entire form unless all the fields would have error messages associated to them! It's horrible to have the user fill out all the form again when there was only one field with error, right? Remember about this type of detail that is related to user experience!

  - If ALL the requested data was input by the user, you will write a message in the output area such as "Thanks, your data was submitted!"

### For Part 2:

The web page for part 2 and the script will be based on the table you see below that shows data about several of our states from the July/2024 census!

- You will create a web page for part 2 with:
  - a heading
  - a hyperlink so the user can go back to the main page of Homework 5
  - a form with an input text box - the user will use that input box to type:
    - either the full name of the state or
    - the two-letter abbreviation of the state
  - a button to submit the data
  - a button to clear the form
  - a textarea inside the form or a different element (div or paragraph) where you will write the output/result
- You will write a script that:

  - The user will type the FULL NAME or ABBREVIATION of the state he/she desires to get information not following any type of pre-determined capitalization. After the user clicks the button to get "State Info", you will verify if the state typed by the user exists in your database - only the states listed in the table above will exist in your database!

  INFORMATION: It should not matter if the user typed the state or abbreviation using capital letters or lowercase or a mix of those.

  TIP: Transform the input of the user and the data you are comparing either to uppercase or to lowercase so you can compare "banana with banana"! You can do that by using the toLowerCase() or toUpperCase() methods.

  - If the state does not exist, write a message in the output area saying something as "Sorry, we do not have information about this state! We only have information about....." - remember to be clear in your error message to guide the user!

  - If the state exists, you should present in the output/result area the information from the state required - think about presenting the information in a nice readable way!

### More Tips:

- Solving this problem involves a two-dimensional array.
- Make sure you validate the input for a correct state abbreviation or state name. If the input is invalid then display an error message.
- If the user enter a state that is not part of the list, show a message to the user but if the user retypes the state and click the Submit button and the state is valid, then the "error" message should not be shown and, instead, you should show the information that is coming from the table below
- For example, suppose the user typed "caliFORNIA" (a mix or lower and uppercase), your script will consider this state valid, would find the state in your list and would present an output message looking something as:

Thanks for your inquiry, here is the information you requested:
State abbr = CA
State Name = California
Capital = Sacramento
Population = 39,431,263

Here is the table with the information for this part 2!

Census data

| Abbr | State Name | Capital    | Population     |
| ---- | ---------- | ---------- | -------------- |
| AL   | Alabama    | Montgomery | 5,157,699      |
| AK   | Alaska     | Juneau     | 740,133        |
| AZ   | Arizona    | Phoenix    | 7,582,384      |
| AR   | Arkansas   | Little     | Rock 3,088,354 |
| CA   | California | Sacramento | 39,431,263     |
| CO   | Colorado   | Denver     | 5,957,493      |
