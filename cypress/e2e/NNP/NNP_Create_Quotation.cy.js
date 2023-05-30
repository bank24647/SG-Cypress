describe('template spec', () => {
  it('passes', () => {
    //ขั้นตอนที่ 1 เพิ่มสินค้าใส่ตะกร้าเพื่อสร้างใบ quotation
    cy.visit('https://sepb2b-nnp2-dev.sepplatform.com/en/company/login')
    //email และ password สำหรับคนสร้างใบ quotation
    cy.get('#email1').type('wanit.dan.it57@cpc.ac.th')
    cy.get('#password1').type('123456')
    cy.get('.registered > #pageloginForm > .form-group.text-center > .btn').click()
    //ลิ้ง url สินค้าที่ต้องการเทส
    cy.visit('https://sepb2b-nnp2-dev.sepplatform.com/en/product/normal-ohm/normal-ohm')
    cy.get('#quantity').type('{selectAll}{backspace}')
    //จำนวนสินค้าที่ต้องการเทส
    cy.get('#quantity').type('10')
    cy.get('#addToCart').click()
    cy.get('.widthfit_contents > :nth-child(3) > .btn-primary').click()
    cy.get('a[class="btn-primary btn-cart btn-place-order"]').click()
    cy.get('#adderess_step_submit').click()
    cy.get('#quote_submit').click()
    cy.wait(1000)
    //ขั้นตอนที่ 2 admin approve quotation
    cy.visit('https://sepb2b-nnp2-dev.sepplatform.com/en/sgadmin/login')
    cy.get('#email').type('admin@enhance.com')
    cy.get('#password').type('Smooth123456@')
    cy.get('#authentication > .login > .btn-primary').click()
    cy.viewport(1024, 768)
    cy.get('[title="B2B"] > .icon').click()
    cy.get('#quotation > [href="javascript:void(0);"]').click()
    cy.get('#quotation > ul > li > a').click()
    cy.get('#pq-body-cell-u2-0-0-right > .btn').click()
    cy.get('.float-right > .btn-primary').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()
    cy.wait(1000)
    //ขั้นตอนที่ 3 ลูกค้า approve ใบ quotation
    cy.visit('https://sepb2b-nnp2-dev.sepplatform.com/en/company/login')
    //email และ password สำหรับคน approve quotation
    cy.get('#email1').type('xeklrdf848@ncialis.online')
    cy.get('#password1').type('123456')
    cy.get('.registered > #pageloginForm > .form-group.text-center > .btn').click()
    cy.get(':nth-child(4) > :nth-child(3) > a').click()
    cy.get(':nth-child(1) > :nth-child(7) > .info-wraps > .mb-3 > .btn').click()
    cy.get('.DTFC_LeftBodyLiner > .table > .cart-item-container > .cart-item-list > .raio-first-col > :nth-child(1) > .radio-ok').click()
    cy.get('#changeStatus').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()
    // automate จบที่ขั้นตอนต่อรองราคาเสร็จแล้วและกำลังรอ approve
  })
})