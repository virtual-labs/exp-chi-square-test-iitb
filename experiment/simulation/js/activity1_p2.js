function activity1_p2() {
    let btn = (document.getElementById('act1-p1-btn-1'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Selecting alpha value', 'act1-p2-div');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide" id="act1-p2-div">
         <h4>Selecting &alpha;<sub>h</sub> value</h4>

      <div>
         <ul>
      
             <li class="fs-16px">A critical value is a cutoff value that defines the boundaries beyond which less than 5% of sample means can be obtained if the null hypothesis is true. Sample means obtained beyond a critical value will result in a decision to reject the null hypothesis.
             </li>
      
             <li class="fs-16px">In a non-directional one-tailed test, Table given below gives the critical values for one-tailed tests at a .05, .01, and .001 level of significance. Figure given below displays a graph with the critical values for given Example shown. In this example 𝛼_h= .05, so we split this probability in half: 

            <br>
            <br>

               <div class='row'>
                  <div class="col-lg-6">
                     <table class='table table-warning table-bordered'>            
                        <tr>
                           <th rowspan="2">Level of Significance (&alpha;<sub>h</sub>)</th>
                              <th colspan="2">Type of test</th>
                        </tr>
                        <tr>
                           <th>One-tailed</th>
                        </tr>
                        <tr>
                           <td>0.05</td>
                           <td>+1.645 or -1.645</td>
                        </tr>
                        <tr>
                           <td>0.01</td>
                           <td>+2.33 or -2.33</td>
                        </tr>
                        <tr>
                           <td>0.001</td>
                           <td>+3.09 or -3.09</td>
                        </tr>     
                     </table>
                  </div>
      
                  <div  class="col-lg-6">
                     <img src="./images/distribution1.png" style="width: 100%;" alt="">
                  </div>
               </div>  
            </li>
         </ul>
      
         <div class='fs-22px fb-600 center-text'>
            alpha(&alpha;) = ${alpha}
            <br>
            <br>
            <button class='btn btn-info std-btn' style='margin: auto;' id='act1-p2-btn-2' onclick='activity1_p3()' >Next</button>
         </div>
         
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-p2-div');
    }, 150);
    // load_alpha_dd();
}
// function load_alpha_dd() {
// 	let inp: HTMLSelectElement = <HTMLSelectElement>(
// 		document.getElementById('act1-alpha-inp')
// 	);
// 	inp.innerHTML = ``;
// 	let default_op = new Option('--Select--', '0');
// 	inp.add(default_op);
// 	for (let i = 0; i < alpha_dd_options.length; i++) {
// 		let op = new Option(
// 			alpha_dd_options[i].toString(),
// 			alpha_dd_options[i].toString()
// 		);
// 		inp.add(op);
// 	}
// }
//for setting alpha value
// function set_alpha() {
// 	let inp: HTMLSelectElement = <HTMLSelectElement>(
// 		document.getElementById('act1-alpha-inp')
// 	);
// 	let btn: HTMLButtonElement = <HTMLButtonElement>(
// 		document.getElementById('act1-p2-btn-1')
// 	);
// 	let next_btn: HTMLDivElement = <HTMLDivElement>(
// 		document.getElementById('act1-p2-btn-2')
// 	);
// 	if (inp.value != '0') {
// 		alpha = parseFloat(inp.value);
// 		let s_2: HTMLDivElement = <HTMLDivElement>(
// 			document.getElementById('act1-p2-alpha-div')
// 		);
// 		console.log(inp.value);
// 		s_2.innerHTML = `<h5>Selected &alpha; = ${alpha.toFixed(2)}</h5>`;
// 		next_btn.style.display = 'block';
// 		chi_sq_alpha = 0;
// 		let indx = 10 - (29 - (N - 1));
// 		let alpha_indx = alpha === 0.05 ? 1 : 2;
// 		chi_sq_alpha = chi_sq_table_data[indx][alpha_indx];
// 		console.log(indx, alpha_indx);
// 		console.log('chi', chi_sq_alpha);
// 	} else {
// 		next_btn.style.display = 'none';
// 		alpha = 0;
// 	}
// }
// activity1_p2();
//# sourceMappingURL=activity1_p2.js.map