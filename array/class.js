class Mahasiswa{

    getUmur(){
        return this.umur
    }

    setUmur(umur){
        this.umur=umur
    }

    
}

m = new Mahasiswa()
m.setUmur(40)
console.log(m.getUmur())