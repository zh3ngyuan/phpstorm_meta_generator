const tintMap = {
    ioi: '#024774',
    benefitmall: '#005892',
    platinumhire: '#19549D',
    netchex: '#54a947',
    mpay: '#3883c0',
    bdb: '#201550',
    jetpay: '#4fba47',
    getbeyond: '#29455a',
    payworks: '#e0703d',
    henryschein: '#666',
    thinkware: '#1d4a89',
    iconnect: '#275fac',
    primepay: '#395f79',
    smartlinx: '#1391CB',
    gethired: '#0060CA',
    execupay: '#005892',
    kellyway: '#0d553f',
    netpay: '#59ae26',
    sage: '#009FDA',
    cyberpay: '#7eb92b',
    fisglobal: '#3883c0',
    "937payroll": '#59ae26',
    heartland: '#fce4e7',
    maypaycenter: '#fce4e7',
    viventium: '#824d9f'
};


const replaceColor = require('replace-color')

Object.keys(tintMap).map((partner) => {
    var replacedColor = tintMap[partner];

    replaceColor({
        image: './collapse_wing.png',
        colors: {
            type: 'hex',
            targetColor: '#da281c',
            replaceColor: replacedColor
        }
    }, (err, jimpObject) => {
        if (err) return console.log(err)
        jimpObject.write(`./collapse_wing_${partner}.png`, (err) => {
            if (err) return console.log(err)
        })
    })

    replaceColor({
        image: './expand_wing.png',
        colors: {
            type: 'hex',
            targetColor: '#da281c',
            replaceColor: replacedColor
        }
    }, (err, jimpObject) => {
        if (err) return console.log(err)
        jimpObject.write(`./expand_wing_${partner}.png`, (err) => {
            if (err) return console.log(err)
        })
    })
});