"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[5844],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>l});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){return function(t){var n=u(t.components);return i.createElement(e,o({},t,{components:n}))}},u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,p=l["".concat(s,".").concat(m)]||l[m]||h[m]||o;return n?i.createElement(p,r(r({ref:t},c),{},{components:n})):i.createElement(p,r({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=g;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[p]="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={sidebar_position:2},s="Code Actions (a.k.a. Assists)",r={unversionedId:"contributing/code-actions",id:"contributing/code-actions",title:"Code Actions (a.k.a. Assists)",description:"Code actions, also known as assists, are small local refactorings, often rendered in the text editor using a light bulb icon (\ud83d\udca1). They are triggered by either clicking the light bulb icon in the editor or by using a shortcut.",source:"@site/docs/contributing/code-actions.md",sourceDirName:"contributing",slug:"/contributing/code-actions",permalink:"/erlang-language-platform/docs/contributing/code-actions",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/erlang-language-platform/docs/contributing/"},next:{title:"Architecture",permalink:"/erlang-language-platform/docs/architecture"}},d={},c=[{value:"The <em>Code Action</em> request",id:"the-code-action-request",level:2},{value:"Adding a new code action",id:"adding-a-new-code-action",level:2},{value:"Creating the handler",id:"creating-the-handler",level:3},{value:"Adding a test case",id:"adding-a-test-case",level:3},{value:"Diagnostic Annotations and Error Codes",id:"diagnostic-annotations-and-error-codes",level:3},{value:"Matching on the diagnostic error code",id:"matching-on-the-diagnostic-error-code",level:3},{value:"The implementation",id:"the-implementation",level:3}],l={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.mdx)(u,(0,i.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"code-actions-aka-assists"},"Code Actions (a.k.a. Assists)"),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"Code actions"),", also known as ",(0,a.mdx)("em",{parentName:"p"},"assists"),", are small local refactorings, often rendered in the text editor using a light bulb icon (\ud83d\udca1). They are triggered by either clicking the light bulb icon in the editor or by using a shortcut."),(0,a.mdx)("p",null,"Code actions often provide the user with possible corrective actions right next to an error or warning (known as a ",(0,a.mdx)("em",{parentName:"p"},"diagnostic")," message using LSP jargon). They can also occur independently of diagnostics."),(0,a.mdx)("p",null,"Here is an example of a ",(0,a.mdx)("em",{parentName:"p"},"code action")," prompting the user to ",(0,a.mdx)("em",{parentName:"p"},"add an EDoc comment")," for a function which lacks Erlang EDoc documentation."),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Code Action - Add Edoc",src:n(49612).Z,width:"968",height:"376"})),(0,a.mdx)("p",null,"And this is what the code looks like after the suggestion has been applied:"),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Code Action - Add Edoc Fix",src:n(27301).Z,width:"1502",height:"326"})),(0,a.mdx)("h2",{id:"the-code-action-request"},"The ",(0,a.mdx)("em",{parentName:"h2"},"Code Action")," request"),(0,a.mdx)("p",null,"Code actions are requested by the editor using the ",(0,a.mdx)("a",{parentName:"p",href:"https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_codeAction"},"textDocument/codeAction")," LSP request. Code action requests are handled by the ",(0,a.mdx)("inlineCode",{parentName:"p"},"handlers::handle_code_action")," function in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"elp")," crate."),(0,a.mdx)("h2",{id:"adding-a-new-code-action"},"Adding a new code action"),(0,a.mdx)("p",null,"In this section we will go through the process of adding a new code action from scratch. The code action (or ",(0,a.mdx)("em",{parentName:"p"},"assist"),") will suggest the user to delete a function, if it is deemed as unused by the Erlang compiler."),(0,a.mdx)("h3",{id:"creating-the-handler"},"Creating the handler"),(0,a.mdx)("p",null,"Let's start by creating a new file named ",(0,a.mdx)("inlineCode",{parentName:"p"},"delete_function.rs"),", containing a single function declaration:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-rust",metastring:'title="crates/ide_assists/src/handlers/delete_function.rs"',title:'"crates/ide_assists/src/handlers/delete_function.rs"'},"use crate::assist_context::{Assists, AssistContext};\n\npub(crate) fn delete_function(acc: &mut Assists, ctx: &AssistContext) -> Option<()> {\n    todo!()\n}\n")),(0,a.mdx)("p",null,"Before we can start implementing our code action, there's one more thing we need to do: ensure our new function is invoked by adding it to the list of ",(0,a.mdx)("em",{parentName:"p"},"ELP assists"),". Open the ",(0,a.mdx)("inlineCode",{parentName:"p"},"crates/ide_assists/src/lib.rs")," file and amend the list of handlers:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-rust",metastring:'title="crates/ide_assists/src/lib.rs"',title:'"crates/ide_assists/src/lib.rs"'},"mod handlers {\n    [...]\n    mod delete_function\n    [...]\n\n    pub(crate) fn all() -> &'static [Handler] {\n        &[\n            [...]\n            delete_function:delete_function,\n            [...]\n        ]\n    }\n}\n")),(0,a.mdx)("h3",{id:"adding-a-test-case"},"Adding a test case"),(0,a.mdx)("p",null,"The easiest way to verify our new code action behaves in the expected way is to start with a test case. ELP allows us to write tests in a very intuitive and straightforward way."),(0,a.mdx)("p",null,"Add the following to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"delete_function.rs")," file:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-rust",metastring:'title="crates/ide_assists/src/handlers/delete_function.rs"',title:'"crates/ide_assists/src/handlers/delete_function.rs"'},'#[cfg(test)]\nmod tests {\n    use expect_test::expect;\n\n    use super::*;\n    use crate::tests::*;\n\n    #[test]\n    fn test_delete_unused_function() {\n        check_assist(\n            delete_function,\n            "Remove the unused function `heavy_calculations/1`",\n            r#"\n     -module(life).\n\n     heavy_cal~culations(X) ->\n  %% ^^^^^^^^^^^^^^^^^^^ \ud83d\udca1 L1230: Function heavy_calculations/1 is unused\n       X.\n\n     meaning() ->\n       42.\n"#,\n            expect![[\n                r#"\n                   -module(life).\n\n                   meaning() ->\n                     42.\n            "#]],\n        )\n    }\n}\n')),(0,a.mdx)("p",null,"There is a lot happening here, so let's go through the code. We are defining a new test, named ",(0,a.mdx)("inlineCode",{parentName:"p"},"test_delete_unused_function"),", which uses an auxiliary function (",(0,a.mdx)("inlineCode",{parentName:"p"},"check_assist"),") to verify that a given assist behaves as expected."),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"check_assist")," function takes 4 arguments:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"The assist ",(0,a.mdx)("em",{parentName:"li"},"handler")," (",(0,a.mdx)("inlineCode",{parentName:"li"},"delete_function"),")"),(0,a.mdx)("li",{parentName:"ul"},"A ",(0,a.mdx)("em",{parentName:"li"},"label")," for the assist"),(0,a.mdx)("li",{parentName:"ul"},"An input fixture representing what the code looks like ",(0,a.mdx)("strong",{parentName:"li"},"before")," a fix is applied"),(0,a.mdx)("li",{parentName:"ul"},"An output fixture (wrapped in an ",(0,a.mdx)("inlineCode",{parentName:"li"},"expect")," macro) showing what the code looks like ",(0,a.mdx)("strong",{parentName:"li"},"after")," a fix is applied")),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"~")," in the first snippet represents the cursor position. We are asserting that - given a diagnostic message pointing to the unused function - if the user triggers the respective code action when the cursor is hovering the function name range, the unused function gets deleted."),(0,a.mdx)("p",null,"Let's try running the test, it should fail with a ",(0,a.mdx)("em",{parentName:"p"},"not yet implemented")," error:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ cargo test --package elp_ide_assists --lib -- handlers::delete_function::tests::test_delete_unused_function --exact --nocapture\n\n[...]\n---- handlers::delete_function::tests::test_delete_unused_function stdout ----\nthread 'handlers::delete_function::tests::test_delete_unused_function' panicked at 'not yet implemented', crates/ide_assists/src/handlers/delete_function.rs:21:5\n[...]\n")),(0,a.mdx)("h3",{id:"diagnostic-annotations-and-error-codes"},"Diagnostic Annotations and Error Codes"),(0,a.mdx)("p",null,"Before starting with the actual implementation, let's for a second go back to the syntax we used to specify the ",(0,a.mdx)("em",{parentName:"p"},"unused function")," diagnostic:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"%% ^^^^^^^^^^^^^^^^^^^ \ud83d\udca1 L1230: Function heavy_calculations/1 is unused\n")),(0,a.mdx)("p",null,"This is a test ",(0,a.mdx)("em",{parentName:"p"},"annotation"),' which is used by the ELP testing framework to populate the "context" which is passed to our handler. This is a way to simulate diagnostics coming from external sources (such as the Erlang compiler or a linter), which would be received by the Language Server as part of a ',(0,a.mdx)("inlineCode",{parentName:"p"},"textDocument/codeAction")," request."),(0,a.mdx)("p",null,"The annotation has the following format:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"[\\s]%% [^]* \ud83d\udca1 CODE: MESSAGE\n")),(0,a.mdx)("p",null,"Essentially, a number of spaces, followed by the ",(0,a.mdx)("inlineCode",{parentName:"p"},"%%")," which resembles an Erlang comment, a light bulb, a ",(0,a.mdx)("em",{parentName:"p"},"code")," identifying the diagnostic type and a string message. The ",(0,a.mdx)("em",{parentName:"p"},"code"),"  is an ",(0,a.mdx)("em",{parentName:"p"},"unofficial error")," code which is emitted by both ELP's ",(0,a.mdx)("em",{parentName:"p"},"Erlang Service")," (see the ",(0,a.mdx)("inlineCode",{parentName:"p"},"erlang_service:make_code/2")," function in ",(0,a.mdx)("inlineCode",{parentName:"p"},"erlang_service/src/erlang_service.erl"),") and by the ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/erlang-ls/erlang_ls/"},"Erlang LS")," language server. The idea is to eventually standardize Erlang error messages and to build what, in the end, should be similar to the ",(0,a.mdx)("a",{parentName:"p",href:"https://doc.rust-lang.org/error-index.html"},"Rust")," or ",(0,a.mdx)("a",{parentName:"p",href:"https://errors.haskell.org/"},"Haskell")," error indexes. In our case, ",(0,a.mdx)("inlineCode",{parentName:"p"},"L1230")," is the error corresponding to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"unused_function")," diagnostic. The ",(0,a.mdx)("em",{parentName:"p"},"message")," is a free text string that accompanies the diagnostic."),(0,a.mdx)("h3",{id:"matching-on-the-diagnostic-error-code"},"Matching on the diagnostic error code"),(0,a.mdx)("p",null,"To be able to match the ",(0,a.mdx)("inlineCode",{parentName:"p"},"L1230")," error code, we need to add a new variant to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"AssistContextDiagnosticCode")," enum. Open the ",(0,a.mdx)("inlineCode",{parentName:"p"},"crates/ide_db/src/assists.rs")," file and include the new error code. Don't forget to map it to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"L1230")," string."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-rust",metastring:'title="crates/ide_db/src/assists.rs"',title:'"crates/ide_db/src/assists.rs"'},'pub enum AssistContextDiagnosticCode {\n    UnusedFunction, // <--- Add this\n    [...]\n    UnusedVariable,\n}\n\nimpl FromStr for AssistContextDiagnosticCode {\n    type Err = String;\n    fn from_str(s: &str) -> Result<Self, Self::Err> {\n        match s {\n            "L1230" => Ok(AssistContextDiagnosticCode::UnusedFunction), // <--- Add this\n            [...]\n            "L1268" => Ok(AssistContextDiagnosticCode::UnusedVariable),\n            unknown => Err(format!("Unknown AssistContextDiagnosticCode: \'{unknown}\'")),\n        }\n    }\n}\n')),(0,a.mdx)("p",null,"We are all set. Time to implement the ",(0,a.mdx)("inlineCode",{parentName:"p"},"delete_function")," function!"),(0,a.mdx)("h3",{id:"the-implementation"},"The implementation"),(0,a.mdx)("p",null,"Let's look at our function again."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"pub(crate) fn delete_function(acc: &mut Assists, ctx: &AssistContext) -> Option<()> {\n    todo!()\n}\n")),(0,a.mdx)("p",null,"We have two input arguments: a mutable ",(0,a.mdx)("em",{parentName:"p"},"accumulator")," which contains the list of code actions (or ",(0,a.mdx)("em",{parentName:"p"},"assists"),") which we want to return and a ",(0,a.mdx)("em",{parentName:"p"},"context"),", from which we can extract diagnostics."),(0,a.mdx)("p",null,"The following code iterates through the list of diagnostics and, for each diagnostic matching the ",(0,a.mdx)("inlineCode",{parentName:"p"},"UnusedFunction")," kind, prints the diagnostic for debugging purposes. We return ",(0,a.mdx)("inlineCode",{parentName:"p"},"Some(())")," to comply with the function signature."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"use elp_ide_db::assists::AssistContextDiagnosticCode;\n\n[...]\npub(crate) fn delete_function(acc: &mut Assists, ctx: &AssistContext) -> Option<()> {\n    for d in ctx.diagnostics {\n        if let AssistContextDiagnosticCode::UnusedFunction = d.code {\n            dbg!(d);\n            todo!()\n        }\n    }\n    Some(())\n}\n[...]\n\n")),(0,a.mdx)("p",null,"If we run the test, we can see what a diagnostic looks like:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'$ cargo test --package elp_ide_assists --lib -- handlers::delete_function::tests::test_delete_unused_function --exact --nocapture\n\n[...]\nrunning 1 test\n[crates/ide_assists/src/handlers/delete_function.rs:25] d = AssistContextDiagnostic {\n    code: UnusedFunction,\n    message: "Function heavy_calculations/1 is unused",\n    range: 24..40,\n}\n[...]\n')),(0,a.mdx)("p",null,"The diagnostic contains the error code and message, together with its range. What we want to do is:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Find the function declaration which is pointed by the diagnostic range"),(0,a.mdx)("li",{parentName:"ul"},"Create a code action to remove the function declaration and add it to the accumulator")),(0,a.mdx)("p",null,"How do we find the element which the range covers? Context to the rescue! There's a handy ",(0,a.mdx)("inlineCode",{parentName:"p"},"find_node_at_custom_offset")," function we can use. The ",(0,a.mdx)("em",{parentName:"p"},"offset")," here indicates the number of bytes from the beginning of the file. We can use the beginning of the diagnostic range for our purposes."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"let function_declaration: ast::FunDecl = ctx.find_node_at_custom_offset::<ast::FunDecl>(d.range.start())?;\nlet function_range = function_declaration.syntax().text_range();\n")),(0,a.mdx)("p",null,"Let's extract the function name/arity and produce a nice message for the user:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'let function_name = function_declaration.name()?;\nlet function_arity = function_declaration.arity_value()?;\nlet message = format!("Remove the unused function `{function_name}/{function_arity}`");\n')),(0,a.mdx)("p",null,"With the information we have, we can now create a new code action and add it to the accumulator:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'let id = AssistId("delete_function", AssistKind::QuickFix);\nlet function_range = function_declaration.syntax().text_range();\nacc.add(id,\n    message,\n    function_range,\n    |builder| {\n        builder.edit_file(ctx.frange.file_id);\n        builder.delete(function_range)\n    },\n);\n')),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"add")," function takes four arguments:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"An internal ",(0,a.mdx)("inlineCode",{parentName:"li"},"AssistId")," made of a unique string (the ",(0,a.mdx)("inlineCode",{parentName:"li"},'"delete_function"')," string in our case) and a ",(0,a.mdx)("inlineCode",{parentName:"li"},"Kind"),". We are specifying ",(0,a.mdx)("inlineCode",{parentName:"li"},"QuickFix")," in our case, but have a look to the ",(0,a.mdx)("a",{parentName:"li",href:"https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#codeActionKind"},"LSP specifications")," to get a list of the available kinds."),(0,a.mdx)("li",{parentName:"ul"},"A message which will be rendered to the user (",(0,a.mdx)("inlineCode",{parentName:"li"},'"Delete the unused function: [FUNCTION_NAME]"'),")"),(0,a.mdx)("li",{parentName:"ul"},"The range of the function. Notice how the range we got from the diagnostic was covering only the ",(0,a.mdx)("em",{parentName:"li"},"name")," of the function, but we need to delete the whole function, so we need to pass the full range."),(0,a.mdx)("li",{parentName:"ul"},"A function which takes a ",(0,a.mdx)("inlineCode",{parentName:"li"},"builder")," as its input and uses it to manipulate the source file. Here we are saying that we want to edit the current file (we extract the ",(0,a.mdx)("inlineCode",{parentName:"li"},"file_id")," from the ",(0,a.mdx)("inlineCode",{parentName:"li"},"ctx")," context) and that we simply want to delete the range of the function declaration.")),(0,a.mdx)("p",null,"Yes. It's as simple as that. For completeness, here is the full function implementation:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'pub(crate) fn delete_function(acc: &mut Assists, ctx: &AssistContext) -> Option<()> {\n    for d in ctx.diagnostics {\n        if let AssistContextDiagnosticCode::UnusedFunction = d.code {\n            let function_declaration: ast::FunDecl =\n                ctx.find_node_at_custom_offset::<ast::FunDecl>(d.range.start())?;\n            let function_name = function_declaration.name()?;\n            let function_arity = function_declaration.arity_value()?;\n            let function_range = function_declaration.syntax().text_range();\n\n            let id = AssistId("delete_function", AssistKind::QuickFix);\n            let message = format!("Remove the unused function `{function_name}/{function_arity}`");\n            acc.add(id, message, function_range, |builder| {\n                builder.edit_file(ctx.frange.file_id);\n                builder.delete(function_range)\n            });\n        }\n    }\n    Some(())\n}\n')),(0,a.mdx)("p",null,"You can look at existing assists for more complex manipulation examples."),(0,a.mdx)("h1",{id:"try-it-yourself"},"Try it yourself"),(0,a.mdx)("p",null,"What we wrote is a unit test, but there's nothing better than checking ourselves the behaviour in the IDE."),(0,a.mdx)("p",null,"Compile the ",(0,a.mdx)("inlineCode",{parentName:"p"},"elp")," executable:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"cargo build\n")),(0,a.mdx)("p",null,"Then visit the Erlang extension settings page and edit the ",(0,a.mdx)("inlineCode",{parentName:"p"},"elp.path")," value to point to the newly built executable, which should reside in:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"./debug/elp\n")),(0,a.mdx)("p",null,"Open VS Code (or reload the window if you have it already open) and visit an Erlang file which contains an unused function. You should see something like:"),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Code Action - Remove Function",src:n(89692).Z,width:"880",height:"467"})),(0,a.mdx)("p",null,"If that worked, congratulations! You managed to write your first ELP code action!"))}m.isMDXComponent=!0},27301:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/code-action-add-edoc-fix-41b68bc5f8f0af57dd2dcdc686e0d850.png"},49612:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/code-action-add-edoc-00c08bb4c5326a4f4544e606890fd667.png"},89692:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/code-action-remove-function-17500a18e85501d12d483dc13df76153.png"}}]);