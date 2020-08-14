class Page{
    constructor(text)
    {
        this.text=text;
    }
    print()
    {
        console.log(this.text);
    }
}

class Notebook{
    constructor()
    {
        this.pages=[];
    }
    addPage(text)
    {
        var page=new Page(text);
        this.pages.push(page);
    }
    print()
    {
        for(let page of this.pages)
        {
            page.print();
        }
    }
}

var mathNote=new Notebook();
mathNote.addPage("Arithmatic....");
mathNote.addPage("Trigonometry........");
mathNote.print();