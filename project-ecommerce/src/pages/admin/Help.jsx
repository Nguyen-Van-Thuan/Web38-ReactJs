import React from "react";

const Help = () => {
  return (
    <>
      <div className="title-group mb-3">
        <h1 className="h2 mb-0">How can we help?</h1>
      </div>
      <div className="row my-4">
        <div className="col-lg-12 col-12">
          <div className="custom-block bg-white">
            <form
              className="custom-form search-form"
              action="#"
              method="post"
              role="form"
            >
              <div className="row">
                <div className="col-lg-12 mb-2">
                  <h6>Search for the topics</h6>
                </div>
                <div className="col-lg-8 col-md-8 col-12">
                  <input
                    className="form-control mb-lg-0 mb-md-0"
                    name="search"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <button type="submit" className="form-control">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="custom-block custom-block-faq">
            <h5 className="mb-4">Frequently Asked Questions</h5>
            <strong className="d-block mb-2">What is Dashboad Template?</strong>
            <p>
              Dashboad Template includes total 6 HTML pages for your
              customizations. It is free of charge provided by Thuan Nguyen
              website.
            </p>
            <strong className="d-block mt-3 mb-2">
              What is Free HTML Template?
            </strong>
            <p>
              Free HTML Template is a ready-made web page based on HTML CSS
              codes.
            </p>
            <strong className="d-block mt-3 mb-2">
              What is the best code editor?
            </strong>
            <p>
              Popular code editors are Dreamweaver, Notepad++, Visual Studio
              Code, Rapid CSS, Sublime Text and Atom to edit HTML CSS JS codes
              and put in your own web contents.
            </p>
            <strong className="d-block mt-3 mb-2">
              Are all templates free to download?
            </strong>
            <p>
              Yes, all CSS templates are 100% free to download and use for your
              websites. You can also use them for learning HTML, CSS, and
              JavaScripts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
