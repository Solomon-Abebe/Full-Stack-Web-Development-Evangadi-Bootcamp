// Quiz 1

console.log(
  "%c Quiz 1 Output",
  "font-size: 2em; font-weight: bold; color: yellow"
);
function job() {
  return new Promise(function (resolve, reject) {
    reject(); // rejects the promise to skip the resolve
  });
}

let promise = job(); //Assign the rejected Promise to promise variable

promise
  .then(function () {
    console.log("Success 1");
  })
  .then(function () {
    console.log("Success 2");
  })
  .then(function () {
    console.log("Success 3");
  })
  .catch(function () {
    console.log("Error 1"); // This runs due to rejection
  })
  .then(function () {
    console.log("Success 4"); // This runs after the catch block
  })
  .finally(() => {
    // This will execute after the above chain
    console.log(
      "%c Quiz 1 Output Completed",
      "font-size: 1.5em; font-weight: bold; color: green"
    );
    runQuiz2(); // Chain the next quiz
  });

//   .then(function () {
// This block will act as the `.finally()` and always run
//       console.log(
//         "%c Quiz 1 Output Completed",
//         "font-size: 1.5em; font-weight: bold; color: green"
//       );
//       runQuiz2(); // Chain the next quiz
//     });
/****************************************************************************** */
// Quiz 2
function runQuiz2() {
  console.log(
    "%c Quiz 2 Output",
    "font-size: 2em; font-weight: bold; color: yellow"
  );

  function job2(state) {
    return new Promise(function (resolve, reject) {
      if (state) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }

  let promise2 = job2(true);

  promise2
    .then(function (data) {
      console.log(data); // "success"

      return job2(false); // This rejects with "error"
    })

    .catch(function (error) {
      console.log(error); // "error"

      return "Error caught"; // This is caught in the next .then()
    })

    .then(function (data) {
      console.log(data); // "Error caught"

      return job2(true); // This resolves to "success"
    })

    .catch(function (error) {
      console.log(error); // Will not be executed
    })
    .finally(() => {
      // Run Quiz 3 after Quiz 2 is done
      console.log(
        "%c Quiz 2 Output Completed",
        "font-size: 1.5em; font-weight: bold; color: green"
      );
      runQuiz3();
    });
}
/********************************************************************************* */
// Quiz 3
function runQuiz3() {
  console.log(
    "%c Quiz 3 Output",
    "font-size: 2em; font-weight: bold; color: yellow"
  );

  function job3(state) {
    return new Promise(function (resolve, reject) {
      if (state) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }

  let promise3 = job3(true);

  promise3
    .then(function (data) {
      console.log(data); // "success"

      return job3(true); // Resolves with "success"
    })
    .then(function (data) {
      if (data !== "victory") {
        throw "Defeat"; // This throws "Defeat"
      }

      return job3(true);
    })
    .then(function (data) {
      console.log(data); // Skipped but why?
    })
    .catch(function (error) {
      console.log(error); // Logs "Defeat"

      return job3(false); // Rejects with "error"
    })
    .then(function (data) {
      console.log(data); // "error"

      return job3(true); // Resolves with "success"
    })
    .catch(function (error) {
      console.log(error); // Skipped since no rejection happens
      return "Error caught";
    })
    .then(function (data) {
      console.log(data); // "success"

      return new Error("test");
    })
    .then(function (data) {
      console.log("Success:", data.message); // Skipped since new Error is not a rejected promise
    })
    .catch(function (data) {
      console.log("Error:", data.message); // Logs "Error: test"
    })
    .finally(() => {
      console.log(
        "%c Quiz 3 Output Completed",
        "font-size: 1.5em; font-weight: bold; color: green"
      );
    });
}
