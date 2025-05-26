---
title: "AI is (not) Magic"
pubDate: 2024-04-25T21:55:31Z
draft: false
---

I study Artificial Intelligence (AI) at university. When I talk with my family, friends, and anyone else who doesn't know what that means but has heard about it on social media or TV, I get some interesting conversations. 

Funnily enough, because AI has been flooding the news everyday for more than a year, people *think* they know what AI is. Instead of asking me, they start naming some things they heard about in said news and look at me: "that's roughly what AI means right?"

**"Well..."**

Explaining the field of AI can be done simply by looking at its name - to (artificially) create intelligence. Understandably, this might still seem very vague, so let me try to give a rough overview of what I do on a daily basis.

The term "Artificial Intelligence" was coined in 1955 at Dartmouth College [1], where John McCarthy, Marvin Minsky, Nathaniel Rochester and Claude Shannon came together and decided enough was enough. A 2-month, 10-man study of artificial intelligence would be carried out to make a significant advancement in any aspect of learning or other feature of intelligence. It's safe to say this didn't quite go to plan...

Although McCarthy and his colleagues may have slightly overestimated themselves, AI was born. For a long time, development was made in so-called "Rule-based" or "Symbolic" AI, which tried to establish all of the rules that humans were dictated by. If we can find these rules, we implement them into a computer, and we're done... right?

Unfortunately, progress went quite slow. Conceptually, this idea sounds nice, but it became apparent that finding rules is tedious, and there is always something that you did not expect. This is known as the **Frame problem**, a concept that still significantly limits these traditional AI systems.

When it is not possible to give an AI system *all* of the possible rules in *all* situations, we must give it the ability to **learn**. This is the foundation of everything we see and hear about in the news, and has only recently (last 1/2 decades) become realizable through massive advancements in data availability and computing power. 

What most people hear about in the news is only a subpart of AI, known as Machine Learning (ML). Again, the name is quite intuitive. Instead of providing all of the clues, we let the machine *learn*, with the hope that it will be able to **generalize** better - that is, not break down in situations it hasn't seen before. 

This might seem like magic - we can make a machine 'learn', and we get something like ChatGPT - which speaks tens of languages perfectly, can do math, and can now even generate videos? 

To be honest, it is quite magical, and even the people behind systems like ChatGPT don't really understand how it works (yes, really, that **is** scary and **should** be scary and I'll be writing about that much more as well!). However, conceptually it is quite simple. The most intuitive form of ML is called **supervised learning** and is often used in computer vision (what your phone uses when you're able to open it with your face). 

The system only needs three things: data, a learning algorithm, and a learning objective. Let's say our learning objective is to distinguish between dogs and cats.

1) Firstly, it has no clue. This is much like a newborn baby who just cries and sleeps... When the model sees an image of a cat, it simply chooses based on its gut feeling (see here for an explanation which covers the math as this 'gut feeling' is slightly more complicated [2]). In our case, fifty/fifty that it's correct.
2) We let the system do this a number of times. Then, we calculate how *wrong* the system was, and the learning algorithm updates the system's 'gut feeling' (some numbers represented mathematically) in the **opposite direction** of the 'wrongness'. This sounds abstract, but the math behind this is very elegant and it works beautifully! ([3] for an amazing video by 3Blue1Brown explaining the process behind it and [4] for a more mathy explanation.)
3) The model learns, keeps looking at new images, gets updated, and after a while, (hopefully) knows how to distinguish between dogs and cats.

As you can imagine, for something like ChatGPT this becomes slightly more complicated, but the intuition largely remains the same!

So, when you hear about AI in the news again, you now know roughly how it works. Instead of *supplying* the rules, we *supply* the data, learning algorithm, and a learning objective. Then, over many iterations, the model learns the patterns in the data that let it classify dogs and cats perfectly. 

When it sees a picture of you, it then classifies you as a dog, or a cat, depending on what you have more similarities with... 

Really, it might sound funny, but (and this is now a large problem) systems like the one described above are trained with only one goal in mind - the learning objective. Unfortunately, it is quite a challenge to have the system act in an appropriate way when it has to deal with unseen data (for instance, your face). It would surely be very hurtful as a black person to get classified as a gorilla, and such a system would surely not be published by **Google** in 2015, *right*?? [5].

Cheers, Alexander

*Any kind of feedback, questions, suggestions for me to write about or anything else is greatly appreciated at alexanderklavermuller@gmail.com*. 


**References**
1. [dart564props.pdf (raysolomonoff.com)](https://raysolomonoff.com/dartmouth/boxa/dart564props.pdf)
2. [Introduction to Neural Networks — Part 1 | by Harsha Bommana | Deep Learning Demystified | Medium](https://medium.com/deep-learning-demystified/introduction-to-neural-networks-part-1-e13f132c6d7e)
3. [Gradient descent, how neural networks learn | Chapter 2, Deep learning (youtube.com)](https://www.youtube.com/watch?v=IHZwWFHWa-w)
4. [Gradient descent - Wikipedia](https://en.wikipedia.org/wiki/Gradient_descent)
5. [Google apologises for Photos app's racist blunder - BBC News](https://www.bbc.com/news/technology-33347866) 