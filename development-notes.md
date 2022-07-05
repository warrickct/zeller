

Used create-react-app typescript for ease of creation.

went with styled components since it's what i'm most familiar with 

started by created the smallest identifiable components such as 




created a wrapper component for the section so it can be used repeatedly for future development. 

considered creating  a separate stamp component for the initial
but decided against as it is unlikely it would be used by anything else

^ decided to create a generic user list item which takes in role and name.

Will also be worth creating loading states for the list components for the query.

## potential improvements

* Adding theming support for easier consistent styling e.g. for the highlight color on a list item.
* Add storing of request information since the query is used in two places it could be used once and read from twice. 
