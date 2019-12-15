# Flash Cards

## Overview:
Built using Mongodb/Mongoose, Express, React and Node

Individual cards, which each have a category, are store in Mongodb. New cards are added to MongoDb.

React Transtion Group is used to switch between cards.

Cards are each separate components and each card has an index. Because during the transition two cards need to be displayed, cards are specified as either "even" or "odd" cards. During the transtion both an even and odd card will be displayed. For example if the 5th card (odd) is currently displayed and the next card is requested (6th, even). The 5th card will slide off screen to the left and the 6th card will slide in from the right.