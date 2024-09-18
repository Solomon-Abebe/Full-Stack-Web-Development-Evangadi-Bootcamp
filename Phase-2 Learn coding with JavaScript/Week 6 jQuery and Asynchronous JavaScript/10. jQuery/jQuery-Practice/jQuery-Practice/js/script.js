console.log(
  "%c jQuery and Asynchronous JavaScript (promise) Practice Exercises",
  "font-size:2em; font-weight:bold; color: yellow"
);
/* ************************************************************************************************************************************************************************ */
// Question 1
console.log(
  "%c Question 1",
  "font-size:1.5em; font-weight:bold; color: yellow"
);

/* The following three questions are based on the two paragraphs under the section which says,
"For Question 1".
1.1. Select the element with an id of "sample1" using jQuery.
1.2. Print the element itself on the console upon page refresh.
1.3. Print the content of the element on the console upon page refresh. Use jQuery to
select the content of the element */

//1.1. Select the element with an id of "sample1" using jQuery.
/* ****************************************************************** */
const sample1 = $("#sample1");

// 1.2. Print the element itself on the console upon page refresh.
/* ***************************************************************** */
console.log(sample1);
// 1.3. Print the content of the element on the console upon page refresh. Use jQuery tonselect the content of the element
/* **************************************************************** */
console.log(sample1.text());
/********************************************************************************************************************************************************************* */
// Question 2
console.log(
  "%c Question 2",
  "font-size:1.5em; font-weight:bold; color: yellow"
);
/*
2.1. Select the element with an ID of "techCompanies" and display it on your console.
2.2. How many tech companies are listed under the ul element with an id of
"techCompanies"?
2.3. Select all elements with a class of "red" and display them on the console.
2.4. Create a new li HTML element with a content of "Facebook" and display it on console
2.5. Give the newly created element a class of "blue" using jQuery
2.6. Append the newly created element next to the the "Sony" <li> element

2.7. How many of the tech companies are labeled blue? Find the result using jQuery and
display the result inside the "blueCompanies" div. 
*/

//2.1. Select the element with an ID of "techCompanies" and display it on your console.
/* ********************************************************************* */
const techCompanies = jQuery("#techCompanies li");
console.log(techCompanies);
//2.2. How many tech companies are listed under the ul element with an id of "techCompanies"?
/* ******************************************************************** */
// console.log("Number of Companies: "+ ("#techCompanies li").length);
// console.log("Number of Companies: "+ $(("#techCompanies li").length));
console.log("Number of Companies: " + $("#techCompanies li").length);

// const numberOfCompanies = $("#techCompanies li").length;
// console.log("Number of Companies: " + numberOfCompanies);

// 2.3. Select all elements with a class of "red" and display them on the console.
/* ***************************************************************** */

const redCompanies = $(".red");
console.log(redCompanies);

// console.log(redCompanies.prevObject);// logs the document object
//2.4. Create a new li HTML element with a content of "Facebook" and display it on console
/* *************************************************************** */
// const createFacebook = $("<li>", { text: "Facebook" });
const createFacebook = $("<li> Facebook </li>");

console.log(createFacebook);
//2.5. Give the newly created element a class of "blue" using jQuery
/* *************************************************************** */
createFacebook.addClass("blue");

//2.6. Append the newly created element next to the the "Sony" <li> element
/* ************************************************************** */

/* //or
const sonyElement = $("techCompanies li:contains('Sony')");
sonyElement.after(createFacebook);

// Or
createFacebook.insertAfter('#techCompanies li:contains("Sony")');
*/
$("#techCompanies li:contains('Sony')").after(createFacebook); // do not add space between : and the selector contains
// $("#techCompanies").append(createFacebook);

//2.7. How many of the tech companies are labeled blue? Find the result using jQuery and display the result inside the "blueCompanies" div.
/* ******************************************* */

// const blueCompanies = $("#techCompanies .blue"); //using descendant
// Or
const blueCompanies = $("#techCompanies").find(".blue"); // using find method
// const showBlueComapnies = $("#blueCompanies").has("p").after("Number of blue companies: " + blueCompanies.length);

// Or
const showBlueCompanies = $("#blueCompanies");
showBlueCompanies.after(
  "<p> Number of Blue Companies: " + blueCompanies.length + "</p>"
);

/********************************************************************************************************************************************************************* */
console.log(
  "%c Question 3",
  "font-size:1.5em; font-weight:bold; color: yellow"
);

/* Question 3:
A form with two text fields is provided under the section which says "For question 3". Write a
jQuery code which takes the values of the two fields, checks if they are number values and
calculate the sum and average of the two numbers.
3.1. Display the result on the console
3.2. Display the result underneath the form
3.3. If any of the numbers provided is not a number, display a message that says "Please
enter numerical values only" underneath the form */

// const adder = $("#adder");
$(document).ready(function () {
  $("#adder").submit(function (event) {
    event.preventDefault();

    const firstValue = $('input[name="first-value"]'); // single and double quotes can be vice-versa or use escaping for the internal similar quating
    // const firstInput = firstValue.val();

    const secondValue = $('input[name="second-value" ]');
    // const secondInput = secondValue.val();

    const num1 = parseFloat(firstValue.val());
    const num2 = parseFloat(secondValue.val());
    if (!$.isNumeric(num1) || !$.isNumeric(num2)) {
      $("#sum").text("Please enter numerical values only!");
    } else {
      const sum = num1 + num2;
      const average = sum / 2;
      // $("#sum").html("Sum: " + sum + "<br> <b>Average:</b " + average);
      // $("#sum").html("<b>Sum:</b> " + sum + "<br><b>Average:</b> " + average);
      // $("#sum").html("Sum: <b>" + sum + "</b><br>Average: <b>" + average + "</b>" );
      $("#sum").html(
        "<b>Sum:</b> <b>" +
          sum +
          "</b><br><b>Average:</b> <b>" +
          average +
          "</b>"
      );
    }
  });
});
// $("li").parent().css({ border: "4px solid green" });
// $("ul").parents().css({ border: "2px solid blue" });
// $("div").children().css({ border: "2px solid" });
// $("div").find("li").css({ border: "2px solid green" });
// console.log($("div").find("li").length);
// $("#secondP").siblings().css({ border: "4px solid red" });
// console.log($("#firstP").siblings());
// $("#firstP").next().css({ border: "4px solid green" });
// looping injQuery
// $("li").css("background-color", "pink");

/********************************************************************************************************************************************************************* */
console.log(
  "%c Question 4",
  "font-size:1.5em; font-weight:bold; color: yellow"
);
// Question 4

/* Question 4:
Create an HTML form which asks users to provide their First name, Last name and Email
address. All the fields should be labeled as required. Once the user submits, write a JavaScript
function that checks if all the fields are provided. If not, it should show an error message above
the form.
If the user provides all the values, hide the form input fields, and display all the values provided
by the user on the browser.
 */

let errorMessage = [];

$(document).ready(function () {
  $("#user-form").submit(function (e) {
    e.preventDefault();

    const firstName = $("#first-name").val();
    const lastName = $("#last-name").val();
    const email = $("#email").val();

    let hasErrors = false;
    if (!firstName) {
      $("#first-name")
        .addClass("error")
        .attr("title", "First Name is required");
      hasErrors = true;

      if (!firstName) {
        $("#first-name")
          .addClass("error")
          .attr("title", "First Name is required");
        hasErrors = true;
      } else {
        $("#first-name").removeClass("error").removeAttr("title");
      }
    } else {
      $("#first-name").removeClass("error").removeAttr("title");
    }
    if (hasErrors) {
      errorMessage.push("Please fill in all required fields.");
      $("#errorMessage").text(errorMessage);
    } else {
      $("#errorMessage").text("");
      const resultHTML = `<b>First Name:</b> ${firstName}<br>
                <b>Last Name:</b> ${lastName}<br>
                <b>Email:</b> ${email}`;

      $("#result-container").show();
      $("#result-container").html(resultHTML);
      $("#form-container").hide();
    }
  });
  $(".error").css({
    border: "2px solid red",
    backgroundColor: "#ffebeb",
  });
});
