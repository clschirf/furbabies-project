# The Furbabies Project
(This is a simple project based on a Database/SQL curriculum I developed while I was a lead for GDI Austin.)

You are developing an app for a (no kill) animal shelter. Potential adopters can see a list of animals, including their name, photo (if they have one), species, breed, and age. 

Admins can see a list of previous and potential adopters that have registered with the shelter.

There is also a record of adoptions, where you can see who adopted which furbaby and when. It is possible for an animal to be adopted multiple times (if they were surrendered after adoption).

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Functional Requirements

### Potential Adopteres
- [x] Users can see list of which animals are up for adoption
	- name
	- picture
- [ ] Users can drill into see details of a particular animal
	[x] name
	[x] picture
	[x] breed
	[ ] age
	[ ] NICE TO HAVE: description, personality traits
	[ ] NICE TO HAVE: previous adoption history
- [ ] Users can see which animals are no longer up for adoption 
	* greyed out image
	* adoption date shown


### Admins
- [ ] Admins can see a list of potential adopters
- [ ] Admins can see reports on
	* how many animals have been adopted / not adopted
		* they can filter by species, age, breed, if currently or previously adopted
