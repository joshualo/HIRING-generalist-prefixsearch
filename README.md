Mason Engineering - Generalist Engineer exercise
===

# Prefix Search

Your objective is to write a simple command-line tool named `pfxsearch` in one of the languages
shown below. This tool will accept a string parameter via the command line, and print
a list of all words in a given dictionary that match the provided prefix (ie. words that begin
with that prefix). The dictionary is provided via the `dict.txt` file included in this repository.

## Example

For instance, a run of the program may look like this:

```
./pfxsearch ban

ban
banana
bananas
bane
bangle
bangles
:
:
```

# Addon 1
If you reach this stage, add support for a command line parameter `-n` that will cause the tool
to print the _number_ of matches found rather than the matches themselves.

## Example

For instance, a run of this enhanced program may look like this:

```
./pfxsearch -n ban
123
```


# Submission

You are to build a small program that can be run from the command line as described above.

## DOs
* Fork this repo to your own user space, make it private (now possible with free accounts
  as well), and add @scorpiodawg as an outside collaborator
* Push all changes to the `master` branch of your fork when your time is up. Do not worry
  about incomplete work -- different engineers take different lengths of time and this will
  be accounted for. We will then fork your repo and review your code.
* Use one of the following languages/tools for the exercise:
  * Golang
  * Javascript with NodeJS/TypeScript
  * C/C++
  * Python 2 or 3
  * Java
  * Kotlin
  
  If you wish to use one of the languages not in this list, please chat with your interviewer first.
* Do include a `NOTES.md` with any notes worth sharing such as build instructions, and if possible, any
  _significant_ resources used during development (StackOverflow questions, articles, sites, etc. 
  You do not need to include links to questions about language syntax, for e.g.)

## DONTs
- Don't jump right in if you have any doubts as to whether your choice of language/
  framework might not be suitable for our review (e.g. less common ones such as 
  Clojure, Fortran, Elixir, etc.). Please clarify with your interviewer first.

**All the best!**
