(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{474:function(e,t,n){"use strict";n.r(t);var o=n(9),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("When I first started using Jupyter Notebooks it took me longer than I’d like to admit to figure out how to get my conda environment kernels to show in the kernels list. When I succeeded I wasn’t satisfied, because I wanted it to be automatic. Like most things, both are simple once you know how.")]),e._v(" "),n("p",[e._v("I’ll show three methods below, each of which is best for a specific scenario.")]),e._v(" "),n("p",[n("strong",[e._v("Method 1: “The Easy Way”")])]),e._v(" "),n("p",[e._v("This is my preferred method because it is simple. New environments appear automatically (as long as they have ipykernel installed.)")]),e._v(" "),n("blockquote",[n("p",[e._v("As of the time of this writing, nb_conda_kernels does not yet support Python 3.9. This only affects our base environment which we aren’t going to use for any of > our work anyway, right? 😃. Your other environments can use any Python version including 3.9.")])]),e._v(" "),n("p",[e._v("Initially your kernel list (under Change kernel) will only show your current environment.")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://miro.medium.com/max/2000/1*UvijwViDH4AVVSs1ZrDixQ.png",alt:"Graph"}})]),e._v(" "),n("p",[e._v("To get your other environment kernels to show automatically:")]),e._v(" "),n("ol",[n("li",[e._v("First, install nb_conda_kernels in your base environment. Once this is installed any notebook running from the base environment will automatically show the kernel from any other environment which has ipykernel installed.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("(base)$ conda install nb_conda_kernels\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Next, create a new environment. I will call mine new-env. If you already have an environment you are trying to get to show on Jupyter Notebook, skip this step.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("(base)$ conda create --name new-env\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("Activate the environment you want to use in your notebook and install iypkernel. My environment is called new-env. If you already have an environment substitute your environment nane for new-env")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("(base)$ conda activate new-env\n(new-env)$ conda install ipykernel\n")])])]),n("ol",{attrs:{start:"4"}},[n("li",[e._v("Restart Jupyter Notebooks from your base environment and done. You can see here that all of my environments with ipykernel installed including new-env are showing. I can now switch between them at will. Bliss.")])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://miro.medium.com/max/2000/1*XELL6xTQZ-B-CQI88oImzA.png",alt:"Graph"}})]),e._v(" "),n("p",[n("strong",[e._v("Method 2: “The Usual Way”")])]),e._v(" "),n("p",[e._v("It is not that much harder to individually register each environment you want to show in your kernels list. If you have many environments this might be preferable because it allows you to register and un-register your environment kernels which could help keep that list tidy.")]),e._v(" "),n("p",[e._v("In your new environment install ipykernel")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("(new-env)$ conda install ipykernel\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Register the kernel spec with Jupyter using the following command. The--name= argument will set the name you see in Jupyter Notebooks for this environment’s kernel (so you can call it whatever you want but using the environment’s name might be wise).")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("(new-env)$ipython kernel install --user --name=new-env\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("Now new-env will be displayed in your list of kernels (no need to restart Jupyter Notebook — just reload the page in your browser).")])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://miro.medium.com/max/1400/1*25KWrO8pDtVUN__inp5mCA.png",alt:"Graph"}})]),e._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[e._v("When you want to un-register that kernel spec (remove the environment’s kernel from the list of available kernels) use the following command:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$jupyter kernelspec uninstall new-env\n")])])]),n("p",[n("strong",[e._v("Method 3: “The Quick and Dirty Method”")])]),e._v(" "),n("p",[e._v("This method doesn’t actually get your environment to show in Jupyter Notebooks, but it is worth noting. If you install jupyter in any environment and run jupyter notebook from that environment the notebook will use the kernel from the active environment. The kernel will show with the default name Python 3 but we can verify this works by doing the following.")]),e._v(" "),n("p",[e._v("Activate your environment, install jupyter, and run jupyer notebook.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("(base)$ conda activate new-env\n(new_env)$ conda install jupyter\n(new_env)$ jupyter notebook\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Run the following code in your notebook to confirm that you are using the correct kernel")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import os\nprint (os.environ['CONDA_DEFAULT_ENV'])\n")])])]),n("p",[n("img",{attrs:{src:"https://miro.medium.com/max/2000/1*djxqDxEZf0LebosTufvfqw.png",alt:"Graph"}})]),e._v(" "),n("p",[n("strong",[e._v("Conclusion")])]),e._v(" "),n("p",[e._v("In the end, how you choose to interact with your kernels in Jupyter Notebook should be based on your particular needs, and not on lack of information about your choices. I hope this article helps to eliminate the later.")]),e._v(" "),n("p",[e._v("Go do good.")]),e._v(" "),n("p",[n("strong",[e._v("References:")])]),e._v(" "),n("p",[e._v("I think this stack overflow answer is not rated high enough (go over and upvote it to show some love for lumbric who posted the answer in response to his own question). It was the basis for my initial understanding on this subject.")])])}),[],!1,null,null,null);t.default=a.exports}}]);