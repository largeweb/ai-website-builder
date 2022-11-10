# ai-website-builder

Inspiration
Something we realized coming into HackNC was that there were people without much web development experience who wanted to learn. We sought to streamline the process and allow for web development code to be accessible for all users who would like to be able to create their own website from scratch. We initially thought of just having a natural language processor, but upon researching the subject, ambition took over - we decided to take our project a step further and implement a sketch intake function would allow for designers to customize their desires for a webpage. Here is our product. We hope you enjoy it as much as we do!

What it does
Our program uses natural language processing and image interpolation AI to convert text and sketch to HTML and CSS code. Our program utilizes OpenAI's Codex algorithm and Microsoft's Sketch2Code AI algorithm.

How we built it
The front end of our web app was built using React and the back end framework was developed with express.js. With Bash scripting, we use an OpenAI natural language processing system called Codex to convert naturally typed text into code. We used Microsoft Azure's ML capabilities to detect handwriting and objects in sketches and prescribe them a probability accuracy value. If this value is above a certain threshold, we accept the object and handwriting and implement the element into the code. We then return downloadable files to the user as well as a visual implementation of the element.

Challenges we ran into
For this project, each member of the team took on a separate set of responsibilities, including developing the web application's front end, building the server for the back end, and using Javascript for image-to-code API conversion and image dissemination, among other things. Finding the best way to combine the capabilities of the image-to-code AI models to effectively develop a text to code generator was the key difficulty for each of us individually. Our project topic dug into relatively new terrain because a native picture and text to code conversion doesn't exactly exist yet perfectly, which caused a lot of challenges because we didn't have many examples or tutorials to help guide us.

Accomplishments that we're proud of
By no means was this project simple or easy. When we first proposed the idea, it seemed so impossible that we almost didn't bother because we didn't think we could complete it in 24 hours. Nobody in our group had any prior experience with text-to-image or text-to-video conversion AI systems, let alone natural language processing AI systems. If we took on this initiative, we would all be pioneers. But in the end, curiosity and ambition prevailed. We are all incredibly pleased of where we've come from and what we've been able to put together over the past day and a half here at the finish line. Taking on this enormous issue and succeeding in making a usable application has undoubtedly been one of most fulfilling projects we've undertaken.

What we learned
We've all learned a lot about the rapidly evolving field of text/image to code conversion, as well as a few things about NLP. In addition, everyone had the opportunity to witness personally how the hardware you utilize can significantly influence how powerful your program is. But in addition to the technical knowledge we acquired, we also learnt a lot about effective teamwork and communication. We couldn't have accomplished what we achieved without the intense level of work and communication that each team member put forth during this project.

What's next for Sketch.UI
We made the decision before starting this project that even if we weren't able to complete it in 24 hours, we would try to continue developing it because it was a highly intriguing idea that would be amazing to see through. In the end, we succeeded in finishing the job, although there is always room for improvement. Optimising the processing accuracy from sketch to code and figuring out ways to provide an even more realistic and accurate visual interpretation of the images fed into the software are both potential future tasks for Sketch.UI.
