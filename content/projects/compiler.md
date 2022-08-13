---
id: 4
title: Partial Go Compiler
description: A partial compiler for the VGo language, made for the University of Idaho Compiler Design course. It exhibits project management, memory allocation and tree traversals.
tech: C flex/bison
logo: /images/vgo-code-1.png
website: http://marvin.cs.uidaho.edu/Teaching/CS445/
github: https://github.com/DDriggs00/CS445
twitter: DDriggs00
---

## About Compiler Design

The University of Idaho compiler design course is the most difficult and time consuming CS course at the University of Idaho. The class consists of a single project, divided into 6 sections.

The first section is designing the lexer using flex, a fast version of the classic lexical analyzer lex. This section performs lexical analysis using regular expression in order to separate the source file into tokens with distinct categories (eg. string, int, name, reserved word).

Next comes the parser. The parser uses bison, a faster version of the classic yacc parser generator. This section converts the tokens generated in section 1 into a context free grammar, and detects any grammatical errors, such as an out of place comma. The output of this section is a syntax tree build from the tokens produced by section 1

Section 3 focuses on semantic analysis: analyzing the meaning of things. This section reads the syntax tree produced by section 2 and uses the information provided to generate symbol tables for each function and hashtable, as well as a global symbol table. These symbol tables store the type and name of all variables declared within that scope.

Section 4 is the final part of semantic analysis. It continues working with the syntax tree produced in section 2. The primary thing done in section 4 is the type checking. This checks the entire tree and verifies that anything that has a type has the correct type for the context.

Once semantic analysis is completed, intermediate code generation can begin. This step converts tree back down into a linked list of three address code objects. These three-address code objects consist of an opcode and 3 memory addresses, one of which is a return value.

The final step in the project is the final code generation. This takes the intermediate code generated in section 5 and converts it into proper x86_64 assembly.

[Codebase is available on GitHub](https://github.com/DDriggs00/CS445)
