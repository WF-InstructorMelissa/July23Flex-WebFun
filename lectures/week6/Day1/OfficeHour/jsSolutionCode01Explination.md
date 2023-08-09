# #1
Sarah is trying to calculate a special value based on a number she chooses. She has a function called "one(num)" that helps her with this calculation. In this function:

- She starts with a sum of 0.
- She runs a loop that iterates from 0 up to the chosen number (excluding the chosen number). During each iteration:
  - She adds the current value of the loop variable to the sum.
- After the loop, she prints out the sum.
- Finally, she returns the sum increased by 10.

For example, if Sarah chooses the number 5:

1. She starts with a sum of 0.
2. In the loop:
   - For i = 0, she adds 0 to the sum (sum = 0 + 0).
   - For i = 1, she adds 1 to the sum (sum = 0 + 1).
   - For i = 2, she adds 2 to the sum (sum = 1 + 2).
   - For i = 3, she adds 3 to the sum (sum = 3 + 3).
   - For i = 4, she adds 4 to the sum (sum = 6 + 4).
3. She prints out the sum, which is 10.
4. She returns the sum increased by 10, so the final result is 20.

Can you help Sarah calculate the final result if she chooses a different number?
---

This word problem explains the process of the given code in a more relatable context, making it easier to understand for someone who might not be familiar with programming concepts.

# #2
Imagine you are managing a rectangular garden that you want to divide into smaller sections for planting different crops. You have a function called "two(x, y)" that helps you understand the layout of these sections. In this function:

- You have two parameters, x and y, which represent the dimensions of the garden.
- You use a nested loop structure to iterate over rows and columns of the garden.
  - The outer loop runs x times, representing the rows.
  - The inner loop runs y times, representing the columns.
- During each iteration of the inner loop:
  - You calculate the product of the current row index and column index (i * j) to determine the characteristics of the section.
  - You print out this product, representing a piece of information about the specific section.
- After examining all sections in the garden, you return the product of x and y, representing the total number of sections in the garden.

For instance, if you have a garden with dimensions x = 3 and y = 4:

1. You start by considering a garden with 3 rows and 4 columns.
2. In the loop:
   - For i = 0 (first row), and j = 0 (first column), you calculate and print 0 * 0 = 0.
   - For i = 0 (first row), and j = 1 (second column), you calculate and print 0 * 1 = 0.
   - ... and so on for all combinations of rows and columns.
3. After examining all sections, you return the product of x and y, which is 3 * 4 = 12, representing the total number of sections in the garden.

Can you use the "two(x, y)" function to help plan your garden layout for different dimensions?
---

This word problem contextualizes the code in a relatable scenario of managing a garden, making it easier to comprehend for someone who might not be familiar with programming concepts.

# #3
Imagine you are a teacher in charge of a class, and you're working with a list of students' test scores. You have a function called "three(array)" that helps you identify and label certain scores in the list. In this function:

- You are given an array of test scores as input.
- You use a loop to go through each score in the array.
- During each iteration of the loop:
  - You check if the current test score is less than 0.
  - If the score is indeed less than 0, you replace that score with the word 'Dojo'.
- After examining all the scores in the array, you return the modified array.

For example, let's say you have an array of test scores: [78, -5, 92, -1, 0, -10, 87]:

1. You start by looking at the first score, which is 78. It's not less than 0, so you leave it unchanged.
2. Moving on to the second score, which is -5. It's less than 0, so you replace it with 'Dojo'.
3. The third score, 92, is not less than 0, so it remains the same.
4. The fourth score, -1, is less than 0, so you replace it with 'Dojo'.
5. The fifth score, 0, is not less than 0, so it stays as it is.
6. The sixth score, -10, is less than 0, so you replace it with 'Dojo'.
7. Lastly, the seventh score, 87, is not less than 0, so you don't make any changes.

After examining all the scores, you return the modified array: [78, 'Dojo', 92, 'Dojo', 0, 'Dojo', 87].

Can you use the "three(array)" function to help you label certain scores in the list and prepare it for further analysis?
---

This word problem creates a relatable scenario involving test scores and the concept of replacing negative scores with a label, making the code's functionality more understandable for someone without programming experience.

# #4
As a dedicated teacher, you are continuing to analyze your students' test scores and the labels you assigned using the "three(array)" function. Now, you have another function called "four(array)" that helps you extract meaningful insights from the labeled scores. In this function:

- You are given an array of test scores, which might include both numerical scores and the label 'Dojo'.
- You start by initializing several variables:
  - `count`: This keeps track of how many times the label 'Dojo' appears in the array.
  - `sum`: This is used to calculate the sum of all numerical scores except the labeled ones.
  - `good`: This counts the number of valid numerical scores (excluding 'Dojo').
  - `avg`: This will store the average of the valid numerical scores.
- You use a loop to iterate through each score in the array.
- During each iteration:
  - If the current score is 'Dojo', you increment the `count` variable.
  - If the current score is a numerical value, you add it to the `sum`, and increment the `good` variable.
- After examining all the scores, you calculate the average of the numerical scores by dividing the `sum` by the `good`.
- You print out the calculated average.
- Finally, you return the total count of 'Dojo' labels in the array.

Now, using the labeled scores array from the previous problem: [78, 'Dojo', 92, 'Dojo', 0, 'Dojo', 87], let's see how you would use the "four(array)" function:

1. You start with the labeled scores array.
2. In the loop:
   - For the first score, 78, it's a valid numerical score. You add it to the `sum` and increment the `good` variable.
   - For the second score, 'Dojo', it's a labeled score. You increment the `count` variable.
   - For the third score, 92, it's a valid numerical score. You add it to the `sum` and increment the `good` variable.
   - For the fourth score, 'Dojo', it's another labeled score. You increment the `count` variable.
   - For the fifth score, 0, it's a valid numerical score. You add it to the `sum` and increment the `good` variable.
   - For the sixth score, 'Dojo', it's a labeled score. You increment the `count` variable.
   - For the seventh score, 87, it's a valid numerical score. You add it to the `sum` and increment the `good` variable.
3. After the loop, you calculate the average by dividing the `sum` by the `good`.
4. You print out the calculated average.
5. Finally, you return the total count of 'Dojo' labels, which is 3.

Can you use the "four(array)" function to analyze your students' test scores, calculate the average of the valid numerical scores, and determine how many times the 'Dojo' label appears?
---

This follow-on word problem extends the scenario by introducing a new function and explaining its functionalities in relation to the previous scenario involving labeled test scores.

# #5
Imagine you're organizing a special event for a group of friends, and you want to create an exclusive list of attendees. You have a function called "five(num)" that helps you generate this list of attendees. In this function:

- You are given a number, `num`, which represents the maximum number of potential attendees you can invite.
- You start with an empty list called `arr` to store the selected attendees.
- You use a loop to iterate from 0 up to the given `num`.
- During each iteration of the loop:
  - You check if the current number is even by using the modulo operation (`i % 2 == 0`).
  - If the number is indeed even, you add it to the list of attendees (`arr`) using the `push` method.
- After going through all the numbers, you return the list of selected attendees.

For instance, if you have a maximum number of potential attendees, `num`, set to 10:

1. You start by considering numbers from 0 to 10.
2. In the loop:
   - For i = 0, it's even, so you add it to the list of attendees.
   - For i = 1, it's not even, so you skip it.
   - For i = 2, it's even, so you add it to the list of attendees.
   - For i = 3, it's not even, so you skip it.
   - ... and so on for all the numbers up to 10.
3. After examining all the numbers, you return the list of selected attendees: [0, 2, 4, 6, 8].

Can you use the "five(num)" function to help you create a list of potential attendees for your event, considering the even-numbered guests?
---

This word problem creates a relatable scenario involving event planning and the concept of selecting even-numbered attendees, making the code's functionality more understandable for someone without programming experience.

# #6
The Fizz Buzz algorithm is a classic programming problem often used to practice conditional statements and loops. Here's a word problem that's similar in spirit to the Fizz Buzz algorithm:

---

Imagine you're organizing a game for a group of children at a summer camp, and you want to keep them engaged and excited. You create a special game called "Sum Spin." In this game:

- Children form a circle, and they take turns counting from 1 to a specified maximum number.
- However, there's a twist! Whenever a child counts a number that's a multiple of 3, they shout "Sum!" instead of saying the number.
- If the number they count is a multiple of 5, they shout "Spin!" instead.
- And if the number is both a multiple of 3 and 5, they enthusiastically shout "Sum Spin!"

For example, let's say the maximum number is set to 15:

1. The first child counts "1."
2. The second child counts "2."
3. The third child counts "Sum" since 3 is a multiple of 3.
4. The fourth child counts "4."
5. The fifth child counts "Spin" since 5 is a multiple of 5.
6. The sixth child counts "Sum" since 6 is a multiple of 3.
7. The seventh child counts "7."
8. The eighth child counts "8."
9. The ninth child counts "Sum" since 9 is a multiple of 3.
10. The tenth child counts "Spin" since 10 is a multiple of 5.
11. The eleventh child counts "11."
12. The twelfth child counts "Sum Spin" since 15 is a multiple of both 3 and 5.

The game continues until the specified maximum number is reached.

Can you create a similar "Sum Spin" game and help the children have a blast while practicing their counting and number recognition skills?
---

This word problem is analogous to the Fizz Buzz algorithm, but it introduces a playful scenario involving a game for children. It retains the essence of checking for multiples of certain numbers and reacting accordingly, which helps in understanding the Fizz Buzz concept in a different context.

Certainly, you can use different numbers instead of 3 and 5 in the "Sum Spin" game scenario. Let's say you want to use the numbers 7 and 11. Here's how you could modify the word problem:

---

Imagine you're creating an exciting game called "Jungle Jump" for a group of kids at an adventure camp. In this game:

- Kids gather in a circle and take turns counting from 1 to a chosen maximum number.
- However, there's a twist! Whenever a child counts a number that's a multiple of 7, they shout "Jungle!" instead of saying the number.
- If the number they count is a multiple of 11, they shout "Jump!" instead.
- If the number is both a multiple of 7 and 11, they enthusiastically shout "Jungle Jump!"

For example, let's set the maximum number to 77:

1. The first child counts "1."
2. The second child counts "2."
3. The third child counts "3."
4. The fourth child counts "4."
5. The fifth child counts "5."
6. The sixth child counts "6."
7. The seventh child counts "Jungle" since 7 is a multiple of 7.
8. The eighth child counts "8."
9. The ninth child counts "9."
10. The tenth child counts "10."
11. The eleventh child counts "Jump" since 11 is a multiple of 11.
12. The twelfth child counts "12."
13. The thirteenth child counts "13."
14. The fourteenth child counts "Jungle" since 14 is a multiple of 7.
15. The fifteenth child counts "15."
16. The sixteenth child counts "16."
17. The seventeenth child counts "Jump" since 17 is a multiple of 11.
18. The eighteenth child counts "Jungle" since 18 is a multiple of 7.
19. The nineteenth child counts "19."
20. The twentieth child counts "20."
21. The twenty-first child counts "Jump" since 21 is a multiple of 11.
22. The twenty-second child counts "22."
23. The twenty-third child counts "Jungle" since 23 is a multiple of 7.
24. The twenty-fourth child counts "Jump" since 24 is a multiple of 11.
25. The twenty-fifth child counts "25."
26. The twenty-sixth child counts "26."
27. The twenty-seventh child counts "Jungle" since 27 is a multiple of 7.
28. The twenty-eighth child counts "28."
29. The twenty-ninth child counts "29."
30. The thirtieth child counts "Jungle" since 30 is a multiple of 7.
31. The thirty-first child counts "Jump" since 31 is a multiple of 11.
32. The thirty-second child counts "32."
33. The thirty-third child counts "33."
34. The thirty-fourth child counts "Jungle" since 34 is a multiple of 7.
35. The thirty-fifth child counts "Jump" since 35 is a multiple of 11.
36. The thirty-sixth child counts "36."
37. The thirty-seventh child counts "Jungle" since 37 is a multiple of 7.
38. The thirty-eighth child counts "38."
39. The thirty-ninth child counts "Jump" since 39 is a multiple of 11.
40. The fortieth child counts "Jungle" since 40 is a multiple of 7.
41. The forty-first child counts "41."
42. The forty-second child counts "Jump" since 42 is a multiple of 11.
43. The forty-third child counts "Jungle" since 43 is a multiple of 7.
44. The forty-fourth child counts "44."
45. The forty-fifth child counts "45."
46. The forty-sixth child counts "Jungle Jump" since 77 is a multiple of both 7 and 11.

The game continues until the specified maximum number is reached.

Can you create the "Jungle Jump" game for the kids, using the numbers 7 and 11 to determine when to shout "Jungle," "Jump," or "Jungle Jump"?
---

This adaptation replaces the numbers 3 and 5 with 7 and 11, creating a new game scenario while still retaining the core idea of shouting specific words for certain multiples.