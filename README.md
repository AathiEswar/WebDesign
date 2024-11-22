# PROGRESS : 

14-11-2024: 
  Finishing the modularized version of HamMenu
  Refining the modules of the HamMenu

15-11-2024:
  Fixing styles
  Testing compatability 

16-11-2024:
  Updated Readme for all the packages ( avent-ui , magneto , ham-menu )
  The Styling Uzumaki  

  Tailwind --------------> Css 
    ^                       |             
    |                       |
    |                       |
    |                       v 
  Styled Comp ------> Emotion Comp

17-11-2024:
   Integrated Tailwind Styling to Magneto with less bundling and module scanner 
   Updated Readme of Magneto to tailwind css integration 

# IDEAS 

* useBreakPoint() - a hook for working with breakpoints in much more simpler way 
    []              : returns current width 
    [{start , end}] : return boolean if the width is between the range 

* UseTheme() - add custom theme any components 
  Eg : useTheme({
        primary : 'black',
        secondary : 'white',
        accent : 'green',
        action : 'red'
      })

* Tailwind tw conflict merge with optimizer using Tailwind variants and clsx

* Dark mode and light mode switch/theme