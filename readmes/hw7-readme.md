# For Part 1:

- Create a webpage for part 1 with

  - a heading of your choice
  - a div, or a main tag with at least 3 paragraphs and that will be the area to be used to apply the styles chosen by the user
  - a form with:
    - radio buttons for the user to select the color of the background to be applied (you should have at least 2 different colors for the user to choose from)
    - checkboxes that will allow the user to choose "underline", and/or "bold", and/or "italic" - remember that HTML checkboxes allow the user to choose one or more options
    - a select element to create a drop-down list where you will allow the user to select the font-size to be applied (at least 3 different font-size should be listed and preferably in em, or rem, or % units)
    - there should be no button to clear the choices, neither a button to submit the information - when the user selects a style, that style will be applied right away
  - a hyperlink so the user can go back to the page of Homework 7

- You will write a script that will do the following:

  - As the user starts selecting the styles available (from the radio buttons, or from the checkboxes, or from the select (drop-down list)), you will apply the selected style to the area mentioned above (div or using the <main> tag)

  IMPORTANT NOTES:
  Remember that if the user checks a certain checkbox and later the user unchecks it, you will need to remove the style that was unchecked from the div (or main) area where the style(s) is(are) being applied.
  The styles should be added as the user keeps selecting/checking the styles from the form you provided - this means that if the user checks the radio button with a color for the background and checks the bold of the checkbox group, both of these styles should be applied - it's not only applying the last style chosen!
  You could never use a group of checkboxes to allow the user to choose different font-sizes because when a user sees a checkboxes, by default, you can check one or more boxes, right? This means that it would be impossible to apply two different font sizes at the same time. This type of selection would be more appropriate by using a group of radio buttons!

# For Part 2:

- Write a web page with a script that will save TWO pairs of cookies for the same page - one of the pairs for the name of the user and another one for the username of the user.
- TIP: The example from the lecture can be used, just remember that here you will be working with 2 pairs when setting your cookie, instead of only 1 pair!
- ANOTHER TIP: The history.go(0) does not necessarily start a new session in the technical sense but forces a FULL PAGE RELOAD FROM THE SERVER or the browser cache. It might be a good idea to use path and expiration date when registering the cookie!

-Both cookies should be deleted when the user closes the browser (not simply closes the tab/window) this means closes the session.

- So, how this page should work?

  - If it is the first time the user is opening the page on the browser, you will present a form for the user to type his/her name and his/her username.

  - If it is not the first time the user is opening the page (if he/she is revisiting the page) while the browser is still opened, you will just display a message of Welcome Back followed by the name of the user that you will retrieve from the cookie previously saved.

  - The main focus should be that your cookie is registered and that you can read from it - I will not bother if I have to manually delete the cookie myself because browsers have changed to increase security and some will not allow you to register cookies without expiration date and/or path.
