function Lab() {
    let _comps = []

    function addComp(comp) {
        _comps.push(comp)
    }

    function getComps() {
        return JSON.parse(JSON.stringify(_comps))
    }
    function generate(comp_id) {
        let data = "<span>Processor ID: " + _comps[comp_id].proc_id + ", Computer’s data-id: " + _comps[comp_id].id +
                    ", BUS: " + _comps[comp_id].bus + "</span>"
        return data
    }

    function validate(comp_id) {
        let data = `<p>MB:  ${_comps[comp_id].mb},<p> <p>QR: ${_comps[comp_id].qr}</p>`
        return data
    }

    return {
        addComp,
        getComps,
        generate,
        validate
    }
}

$(document).ready(function() {
    let lab = Lab()
    function checkIfAdded(comp) {
        let index = lab.getComps().findIndex(elm => elm.id === comp.data().id)
        if (index < 0) {
            let proc = comp.find(".processor")
            let qrs = []
            proc.children("span").each(function() { qrs.push($(this).text())});
            let newComp = {id: comp.data().id, proc_id: proc.attr('id'), bus: comp.find(".BUS").text(),
                            mb: comp.find(".MB").text(), qr: qrs}
            lab.addComp(newComp) 
            index = lab.getComps().findIndex(elm => elm.id === comp.data().id)
        } 
        return index
    }
    $(".generator").click(function(){
        let comp = $(this).closest(".computer")
        let index = checkIfAdded(comp)
        let message = comp.find(".message")
        message.empty()
        message.append($(lab.generate(index)))
    })

    $(".validator").click(function() {
        let comp = $(this).closest(".computer")
        let index = checkIfAdded(comp)
        let message = comp.find(".message")
        let staff = comp.find(".staff")
        message.empty()
        message.append($(lab.generate(index)))
        staff.empty()
        staff.append($(lab.validate(index)))
    })
})