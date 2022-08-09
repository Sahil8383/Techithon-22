import "./about.css";
import React, { useState, useRef, useEffect, } from "react";
import Backgrond from "../../Backgrond/backgrond";

export default function About() {
  
  return (
    <Backgrond>
      <section>
        <div class="container">
          <div class="card">
            <div class="content">
              <div class="imgBx">
                <img src="https://image.flaticon.com/icons/png/256/4213/4213641.png" />
              </div>
              <div class="contentBx">
                <h3>Giraffe</h3>
              </div>
            </div>
            <ul class="sci">
              <li>
                <a href=""><button>Icon</button></a>
              </li>
              <li>
                <a href=""><button>Icon</button></a>
              </li>
              <li>
                <a href=""><button>Icon</button></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Backgrond>
  );
}


