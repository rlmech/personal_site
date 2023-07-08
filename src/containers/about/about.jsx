import React from 'react';
import './about.css'
import Peter from '../../assets/imgs/BCeater-right.png'
import Robert from '../../assets/imgs/robert_img_compressed.jpg'

const About = () => {

    const sections = [
        {
            textcontents: <>
                <p>My name is Robert Lauv. I'm currently a third year pursuing a B.S. in Computer Science at University of California, Irvine.</p>
                <p>My interests are somewhere.</p>
                <p>My pastimes include eating, hanging out with friends, asking random questions about life, 
                    and playing games like Chess, Valorant, Terraria, etc.</p>
            </>,
            img: {
                imgsrc: Robert,
                alt: "Pic of Robert Lauv",
            }
        },
        {
            textcontents: 
            <>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ipsam omnis vero quidem tempora voluptas laudantium fugit, adipisci aspernatur rem corrupti hic molestiae quisquam, eaque at inventore doloremque asperiores sunt cum illum. Enim, beatae, quas molestias voluptates recusandae impedit harum sed quidem tenetur voluptatibus eaque aperiam dolores, veritatis esse accusantium! Modi, est tenetur natus vel aliquam ipsum velit illo, dolorem, ea quidem quis vitae? A dolor architecto nemo dignissimos consequatur iste dicta repellendus alias praesentium dolores. Quam minima repellat illo itaque officiis, sequi possimus atque veritatis, tempora obcaecati corrupti. Molestias, commodi mollitia! Cum, quod. Enim officiis dolores neque velit dicta modi temporibus autem eius excepturi mollitia, hic rem veniam quidem optio asperiores, qui earum dignissimos voluptas omnis! Sequi esse quos necessitatibus id placeat veniam molestias ullam. At, animi corporis consequuntur, nobis temporibus tempore, id ratione placeat inventore debitis expedita esse! At iste porro, dolore provident rerum fugit eligendi, voluptatibus facere magni dolor, ut accusamus sunt iure quod corporis perferendis minima optio odit officiis fugiat deserunt obcaecati. Non facere illum eum ex quia, culpa ducimus harum libero fuga iste quod exercitationem suscipit, id nihil consectetur magnam distinctio fugit molestiae, autem a beatae ipsa praesentium labore accusamus. Totam nemo et optio, doloremque repudiandae, aliquid nisi accusantium ad minus velit quia illum magni, sint quam. Itaque recusandae ipsam accusantium suscipit ab assumenda, labore adipisci fugiat odio harum cumque, exercitationem, reiciendis aperiam voluptatum tempore explicabo at quo aut perspiciatis eum ratione pariatur. Modi ad aspernatur deleniti, necessitatibus animi culpa sequi accusamus magnam assumenda rerum repellendus harum adipisci, mollitia consectetur? Odit ipsa, magnam tempora officiis beatae sed doloremque, rerum rem, laborum deserunt harum nam sapiente. Ipsa dolores nostrum numquam excepturi nobis cum iusto accusantium necessitatibus tempora? Natus, ipsam, obcaecati nesciunt saepe veritatis optio laboriosam soluta consequatur similique veniam iusto eveniet modi nobis omnis, dolore impedit vitae illum provident? Culpa eaque perferendis repellendus doloribus molestias. Deleniti exercitationem distinctio veritatis eligendi quibusdam vel natus ad laboriosam nemo, quasi eaque perspiciatis officia obcaecati error nostrum quia adipisci, quae nulla dolorem maxime aut. Ut exercitationem quisquam sapiente? Doloremque sequi perferendis sapiente, atque natus debitis rem suscipit dicta? Delectus esse molestias itaque distinctio. Vero iste ut voluptatibus aliquid perspiciatis laborum veniam quis vel odio eum ipsum, assumenda voluptas corporis sapiente totam vitae inventore autem, fuga minus! Debitis, ab. Quos expedita sint nisi culpa laudantium doloribus commodi quasi, necessitatibus neque voluptatem, ipsum dicta earum! Maxime non debitis hic ex totam ipsam, praesentium ducimus architecto eius voluptatem reprehenderit quas nulla molestiae tenetur cumque? Odio labore dolore nemo et atque sed temporibus sapiente veritatis, quisquam sequi! Consectetur impedit, ea natus delectus minus provident inventore eum ab qui in, explicabo odio dolorum temporibus tempore enim repellat pariatur doloremque? Est sint ut quia quos voluptatem, mollitia exercitationem quas inventore at facilis repellendus voluptatum sapiente ab hic, quibusdam dolor et corrupti ratione, deserunt quaerat excepturi ipsa qui quam. Vitae cumque, placeat vero iste excepturi aperiam labore dolores, odit fugiat, consequatur perspiciatis aut voluptatem necessitatibus iure quibusdam commodi consectetur rem ipsum ratione quaerat. Similique repellendus doloribus maiores?</p>
            </>
        }
    ]
    
    const insertSections = sections.map( (section) => {
        return (
            <div className="section-wrapper">
                {('textcontents' in section) && (
                    <div className="section-text">
                        {section.textcontents}
                    </div>
                )}
                {('img' in section) && (
                <div className="section-img">
                    <img styles={('styles' in section.img) && (section.styles)} src={section.img.imgsrc} alt={section.img.alt}></img>
                </div>
                )}
            </div>
        )
    })

    return (
        <>
            <div className="sectionContainer">
                {insertSections}
            </div>
            <img className="bottomPageDecor" src={Peter} alt="Pic of UCI Mascot Peter the Anteater"></img>
        </>
    );
}

export default About;