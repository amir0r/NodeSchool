# My walkthrough

```bash
how-to-npm
#   Hello, and welcome to the npm adventure workshop!  I am going to be
#   asking you to do various things with npm so that you can get started
#   with it easily.
# 
#   Some helpful commands:
# 
#   npm help ............ Get help with npm
#   how-to-npm print .... Re-display the current exercise
#   how-to-npm verify ... Verify that you have finished an exercise
#   how-to-npm solution . Show the solution for the current exercise
# 
#   The first thing we're going to do is make sure that your npm
#   version is up to date.
# 
#   Run `how-to-npm verify` once that is done.
# 
#   (This is the only part of the workshop that requires network access.
#   If the network is busted, and you want to skip this one, you can run
#   `how-to-npm verify skip` to skip it.)
how-to-npm verify
#
#   verifying that npm is installed...
#   You have version 5.6.0 installed.  Great!
#   Now let's see what the latest version is... wait for it...
#   The latest npm is: 5.6.0
#   Congratulations!
#   You have a recent version of npm installed!
#
how-to-npm
#     One of the most important things that npm does is install packages.
#
#     However, in order to be a good workshop program, we don't want to litter
#     files all over your computer, so before going any further, let's set up a
#     development environment.
#
#     First, make a new directory and `cd` into it.
#
#     Then, run `npm init` to create a package.json file. You will be prompted
#     to answer a number of questions. You can just press enter to accept the
#     default for each question.
#
#     Run `how-to-npm verify` once you're done.  All the other commands
#     you run in this tutorial should be done in that folder.
mkdir dev-environment
cd dev-environment
npm init
how-to-npm verify
#
#    Congratulations!
#    You have a development environment.
#
#    From here on out, make sure to run the workshop in this dir
#
#    You might notice that a `.npmrc` file will show up in there.
#    That normally would not be required, but the workshop uses it
#    to mock out the parts that would normally talk to the internet.
#
how-to-npm
#
#     npm is best when you can be a part of it.  That starts with
#     creating an account.
#
#     Because this is just a tutorial adventure, remember, we're not
#     *actually* creating an account anywhere.  However, when you run
#     this in the Real World, it'll create a real account, with a page
#     on npmjs.com and the ability to publish packages that real live
#     humans can install and enjoy.
#
#     To see who you're logged in as, run `npm whoami`
#
#     To create your account, run `npm adduser`
#
#     Try it now, and open the door to ever-greater module fun times!
#     Then run `how-to-npm verify`
npm adduser
# username: myself
# password:
npm whoami
# myself
how-to-npm verify
#     Congratulations, myself!
#     You are the proud owner of an imaginary new npm account!
#     Use it wisely.  Never in anger.  Always for the Good.
#     
#     With this sweet power comes much responsibility, which is
#     sufficiently different from Spiderman's thing that Marvel
#     hopefully won't sue us.
#     
#     Excelsior!
how-to-npm
#     npm helps you build projects, but for npm to be able to do that, you need
#     to tell npm a little bit about your project. You can tell npm about your
#     project in a file called package.json.
#
#     Run `npm init --scope=<username>`, and replace <username> with the user
#     you created in the last lesson. This will create a package.json file.
#     (For extra credit, set the project up with a git repo as well.)
#
#     Run `how-to-npm verify` once you're done.
npm init --scope=myself
#     For extra credit, try also setting up this dir as a git repository.
#     
#     The convention is to have a single git repo for each module or project.
#     Use the `git init` command to set up your working dir as a git project.
#     
#     Then, run `how-to-npm verify extra credit`
#     
#     Congratulations!
#     You created a project!  View the package.json file to see it.
how-to-npm
#
#     The first thing that most people do with npm is install a dependency.
#
#     Dependencies are fetched from the registry, and unpacked in the `node_modules` folder.
#
#     To install a module, use the `npm install <modulename>` command.
#
#     The registry that we're using for this tutorial is a tiny version of
#     the one at https://registry.npmjs.org.  So you might find that it only has
#     a small number of things.
#
#     Let's start out by installing the "@linclark/pkg" module.
#
#     Run `how-to-npm verify` once you're done.
#
npm install @linclark/pkg
#     npm notice created a lockfile as package-lock.json. You should commit this file
#     + @linclark/pkg@1.0.2
#     added 1 package in 0.875s
how-to-npm verify
#     Congratulations! You installed it.
how-to-npm
#
#     npm isn't just for installing stuff.  It also shows you what you
#     have installed (your dependencies).
#
#     You can do this using the `npm ls` command.
#
#     Run this command in your working dir.  If there are
#     any problems npm will alert you by returning an "!ERR" message.
#
#     If everything looks ok, then run `how-to-npm verify OK`, or
#     `how-to-npm verify NOT OK` if npm does report a problem".
#
npm ls
#     test@1.0.0 C:\Users\abarnat\Documents\perso\nodeschool\how-to-npm\dev-environment
#     `-- @linclark/pkg@1.0.2
how-to-npm verify OK
#     Looks like you fixed the problem.  Fantastic!
#     Note that `npm ls` is a lot calmer now.
how-to-npm verify

     # Now you've installed something, and used `npm ls` to show what's going on.

     # If you look at the package.json file, it has this rather odd bit in it:

     #   "scripts": {
     #     "test": "echo \"Error: no test specified\" && exit 1"
     #   },

     # npm can be used as a task runner with its "scripts" property.  Almost
     # every module and project will have a test script that runs to make
     # sure everything is good.  In order to help remind you to do this, npm
     # puts an "always failing" test in there by default.

     # First, create a file called `test.js`.  For the purposes of this workshop
     # you can leave it blank, but this would be where you'd write your
     # tests (this is npm class, not testing class).  The test has to exit
     # without throwing an error, or else the test fails.

     # Then, edit your `package.json` file to make your scripts section look like
     # this instead:

     #   "scripts": {
     #     "test": "node test.js"
     #   },

     # Once that's done, run `how-to-npm verify` to check your work.

     # Additional info: If you wanted to actually run any tests you'd written in
     # `test.js` with the "test" script, you'd run `npm test`.

     # The docs for npm's scripts property can be found here:
     # https://docs.npmjs.com/misc/scripts
touch test.js
vim test.js
how-to-npm verify
# Running your test script...
#
# > test@1.0.0 test C:\Users\abarnat\Documents\perso\nodeschool\how-to-npm\dev-environment
# > node test.js
#
# ...done!
# Congratulations!  You wrote a test that passes!
# Writing a test that is actually GOOD is left for another time.
how-to-npm

     # So, we've created a package.json file, but it's missing a few things
     # that people usually expect.  If you type `npm install`, you'll see
     # something like this:

     #     npm WARN package.json %ID% No description
     #     npm WARN package.json %ID% No repository field.
     #     npm WARN package.json %ID% No README data

     # Before we can share this work of art with the world, we need to make
     # it a bit more polished so that people know how to use it.

     # First, create a README.md file, with a few words in it.

     # Then, add a "repository" field in your package.json file, with a url
     # where people can access the code.

     # You can edit your package.json file by hand, or run `npm init` again.

     # Run `how-to-npm verify` when you're done.
touch README.md
vim README.md
npm init
how-to-npm
     # What good is a package manager without packages?

     # Not very good.

     # Luckily, that is not a problem for npm, because it's very easy for all
     # npm users to publish their modules and share them with the world.

     # Packages get into the registry by using the `npm publish` command.

     # Try it now. There's not much to it.

     # (Make sure you're still in the right project directory, though.  If you
     # publish something by mistake, you can remove it, but there's no guarantee
     # that no one saw it in the meantime.)

     # Then run `how-to-npm verify` when you're done.
npm publish
# + test@1.0.0
how-to-npm verify
# In order to view your package content, I just ran this command:

#   npm view test

# Run that command yourself to see what it prints out.

# The `npm view` command is a great way to view package details,
# to see what you just published, and to check if a name is already taken.

# Now that you've published your first package here in make-believe npm
# workshop land, go out and write a real thing to share with real humans!

# You don't have to just share code for other people, though.  There are
# also benefits to breaking up your code into small manageable pieces, even
# if you are only using them all yourself.

# You can imagine that your future self and your past self are the two
# other developers on your team.  (Scheduling meetings is pretty tricky.)

# Run `how-to-npm` to go on to the next adventure!
how-to-npm

     # Every package in npm has a version number associated with it.  As
     # you release updates to your package, these updates get an updated
     # version number.

     # Version numbers in npm follow a standard called "SemVer".  This stands
     # for "Semantic Version".  The specification for this standard can be
     # found at http://semver.org.

     # The tl;dr version is that for a version like this:

     #   1.2.3
     #   ^ ^ ^
     #   | | `-- Patch version. Update for every change.
     #   | `---- Minor version. Update for API additions.
     #   `------ Major version. Update for breaking API changes.

     # npm has a special command called `npm version` which will update your
     # package.json file for you, and also commit the change to git if your
     # project is a git repository.  You can learn more at `npm help version`.

     # Or, if you don't trust the machines, you can open up your package.json
     # file by hand, and put some new numbers in the "version" field.

     # The npm registry won't let you publish a new release of your package
     # without updating the version number!  Ever!  So, get used to the idea of
     # bumping the version whenever you want to publish, even if the change is
     # really minor.

     # Don't worry, there's a lot of integers, we probably won't run out.

     # Update your version number now, and then `how-to-npm verify` to check it.
npm version
# { test: '1.0.0',
#   npm: '5.6.0',
#   ares: '1.13.0',
#   cldr: '31.0.1',
#   http_parser: '2.7.0',
#   icu: '59.1',
#   modules: '59',
#   nghttp2: '1.25.0',
#   node: '9.0.0',
#   openssl: '1.0.2l',
#   tz: '2017b',
#   unicode: '9.0',
#   uv: '1.15.0',
#   v8: '6.2.414.32-node.8',
#   zlib: '1.2.11' }
vim package.json
how-to-npm verify
# Great job!
# Run `how-to-npm` for the next exciting challenge!
how-to-npm

     # Publishing something once is fine.  But healthy packages get
     # published again and again with new and exciting bug fixes.

     # You can't re-use the same version number again, because that's hella
     # confusing for all the robots running the treadmills that power the npm
     # registry.  But, now that we changed the version number in the last
     # exercise, you can publish the package again.

     # Go for it!  Then get your prize with `how-to-npm verify`
npm publish
# + test@1.0.1
how-to-npm verify
# Wow!  You are well on your way to becoming a regular
# TJames "Substack" Halidaychuk!  There's no stopping you!
# Run `how-to-npm` to go to the next step.
how-to-npm

     # Every published package on npm has a `dist-tags` entry on it which
     # maps strings like "latest" to version numbers like "1.2.48".

     # By default, the "latest" version is what gets installed.  When you
     # publish, the version that you publish gets tagged as "latest".  This
     # is generally great, because most of the time you publish things when
     # you're ready for users to use them.

     # However, if you need to publish something, and *not* make it the
     # default version of a package (for example, if it's a security release
     # for a legacy version, or something), then you can manually manage
     # these distribution tags with the `dist-tag` function.

     # `npm dist-tag add <pkg>@<version> [<tag>]` will add a new tag.
     # To find out the name of your current package/version type `npm ls`.
     # The first line of the output will be the package and version; e.g. pkg@1.0.1.
     # To add a tag type in the name of the tag.

     #   npm dist-tag add pkg@1.0.1 beta

     # Run `npm help dist-tag` to learn more about it.

     # Let's add a dist-tag on your package,
     # and then `how-to-npm verify` to check it.
npm dist-tag add test@1.0.1 beta
# +beta: test@1.0.1
how-to-npm verify
    # Congratulations!  You've added a dist-tag!

    # This is a handy way to manage releases.  For example, the npm project
    # itself publishes each new version as 'next' (instead of 'latest') so
    # that beta users can test it out before it becomes the default.

    # Run `how-to-npm` to move on to the next exercise.
how-to-npm

     # Now that you've added a dist-tag or two, let's clean things up.

     # The only dist-tag you CAN'T ever remove is "latest".  That's because
     # every package installs its "latest" tag by default, so that tag has
     # some special semantics.

     # You CAN point "latest" to a different version, or delete other tags.

     # Let's delete all the tags that we can, and also point "latest" at
     # something other than the most recent release.

     # Run `npm help dist-tag` to learn more about the command.
npm dist-tag add test@1.0.1 beta
# +beta: test@1.0.1
npm dist-tag rm test beta
# -beta: test@1.0.1
npm dist-tag add test@1.0.0
# +latest: test@1.0.0
how-to-npm verify
    # Congratulations!  You're a dist-tagging pro!

    # Run `how-to-npm` to move on to the next exercise.
how-to-npm
     # Now that we have some dependencies, and you've learned that your own
     # packages can be updated repeatedly, the obvious question is: What do
     # we do when someone *else* updates *their* package?

     # The first step is to detect this.  Because of the way that we define
     # our dependencies with a version range, and each release is a unique
     # combination of a name and a version, we can detect compatible releases
     # programmatically with the `npm outdated` command.

     # To pass this challenge, run `how-to-npm verify PKG` where `PKG`
     # is the name of the package that is out of date.
npm outdated
# Package        Current  Wanted  Latest  Location
# @linclark/pkg    1.0.2   1.0.3   1.0.3  test
how-to-npm verify @linclark/pkg

    # That's absolutely right!  The `@linclark/pkg` package has had an update while
    # we weren't looking.

    # In the next lesson, we'll learn how to update packages that are outdated.
how-to-npm

     # It's fine, of course, to explicitly check for outdated modules,
     # and then run `npm install` to pull them in.

     # However, if you want to be a bit more lazy about it, there's a special
     # npm command that will UPDATE all of your deps to the max version you
     # allow in your package.json.

     # Can you guess what command that might be?  (`npm help` might help you)

     # Update all your deps to the latest version possible, and then
     # run `how-to-npm verify` to pick up your delicious green banner.
npm update
# + @linclark/pkg@1.0.3
# updated 1 package in 1.331s
how-to-npm verify
# Awesome!  You're up to date!
# Run `how-to-npm` to move on to the next exercise
how-to-npm

     # If you have a way to put stuff there, then naturally, you'll one
     # day need a way to delete them.

     # Enter the `npm rm` command (aka `npm uninstall` if you prefer to
     # type things out long-hand).

     # Remove all the deps!  But, make sure that you don't keep depending on them.

     # Just like you can use `--save` on installing packages, you can also
     # use `--save` when removing packages, to also remove them from your
     # package.json file.

     # When you've removed your dependencies, type `how-to-npm verify` to move on.
npm rm @linclark/pkg --save
# removed 1 package in 0.11s
how-to-npm verify

    # Awesome!  You have removed the packages from your node_modules folder,
    # and also updated your package.json file to reflect that you're no longer
    # depending on them.

    # Well done.
how-to-npm

     # It's almost time to say goodbye.  But don't worry!  This is just an
     # introduction.  If you've finished all the other exercises, then run
     # `how-to-npm verify` to learn about the next steps beyond this little
     # workshop.
how-to-npm verify

    # There is SO MUCH MORE that npm can do.  Some of the things that we didn't
    # have time to cover in this modest little workshop include:

    # 1. Splitting your app up into multiple modules
    # 2. Sharing private code with teammates using scoped modules
    # 3. Other fun npm commands, like `edit` and `bugs` and `explore`!

    # You can still learn more about all the fun you and npm can have together.
    # It all starts with the thought: "There should be a module that does this..."

    # Your adventure is awaiting you at https://www.npmjs.com/

    # See you on the internet!


```
