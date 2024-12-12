const RentalDetailSection = ({
  facilityCage,
}: {
  facilityCage: string | undefined;
}) => {
  return (
    <>
      {facilityCage === "cricket cage" && (
        <div className="space-y-7">
          <h2 className="font-semibold lg:text-3xl text-2xl lg:leading-7 leading-6">
            Cricket Cage
          </h2>
          <div className="sm:space-y-6 space-y-5">
            <p className="lg:text-lg text-[#777777] leading-6">
              Cricket is booming in the US and so are your temptations to
              transform your skills of the game. Our Cricket Batting Cage is
              built on international standards and equipped with modern state of
              the art technology
            </p>
            <p className="lg:text-lg text-[#777777] leading-6">
              This is perfect for individuals and teams at all levels from
              professional to beginners. Prostrikers Cricket cage which consist
              of 3 full run lanes and automatic / manual bowling machines, the
              pitch built to behave natural turf like performance to different
              bowling conditions with pace, bounce, and spin so you learn to
              handle the storm and perfect your batting skills. The machines
              could be used manually for different variances or configure for
              auto mode which helps batsman to enhance reaction time, power
              hitting and batting skills for a consistent training session.
            </p>
            <p className="lg:text-lg text-[#777777] leading-6">
              Further, our cricket cage can be utilized to practice bowling
              through advanced training such as spot bowling which help bowlers
              to improve bowling actions, variations, speed enhancement and
              experience a total bowling training package.
            </p>
            <p className="lg:text-lg text-[#777777] leading-6">
              This ideal for cricketers or any person interested in the sport
              who wish to groom their batting skills or bowling skills to next
              level.
            </p>
            <div className="space-y-4">
              <p className="lg:text-xl text-lg leading-6">
                How we facilitate your training:
              </p>
              <ul className="space-y-3 ms-5 lg:text-lg text-[#777777]">
                <li>State of the art cricket turf</li>
                <li>Three Batting cages</li>
                <li>Automatic / Manual bowling machines</li>
                <li>Emergency First aid.</li>
                <li>Cricket Gear Kits & speed guns available for rent.</li>
                <li>Used practice cricket balls available with the cage </li>
                <li>Sports gear shop stocked with Pro Cricket gear</li>
                <li>
                  Unique training programs for beginners and professionals.
                </li>
                <li>
                  Certified Trainers (ICC Level 4) available upon request.
                </li>
                <li>Exclusive membership offers for teams and individuals.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {facilityCage === "baseball cage" && (
        <div className="space-y-7">
          <h2 className="font-semibold lg:text-3xl text-2xl lg:leading-7 leading-6">
            Baseball Cage
          </h2>
          <div className="sm:space-y-6 space-y-5">
            <p className="lg:text-lg text-[#777777] leading-6">
              A powerful swing and a proper batting stance are key for power
              hitting in baseball. The Baseball cage at Prostrikers is unique
              with modern power batting techniques for players of all ages. The
              Baseball Cage is built to mimic game-day conditions, with speed
              and variations, so you can learn to handle any curveball that
              comes your way. Our cage boasts three full-length batting lanes
              and automatic / manual pitching machines to help you master your
              swing. We also have resident coaches to help you master the
              batting and pitching skills or you can bring your own coach for
              the practice session.
            </p>
            <p className="lg:text-lg text-[#777777] leading-6">
              Whether you're a beginner or a seasoned pro, our baseball cage is
              the ideal spot to groom your batting skills to the next level.
            </p>
            <div className="space-y-4">
              <p className="lg:text-xl text-lg leading-6">
                Here's how we help you to improve your power hitting:
              </p>
              <ul className="space-y-3 ms-5 lg:text-lg text-[#777777]">
                <li>Automatic pitching machines.</li>
                <li>
                  Pitching mats, Hitting mats /mounts and power batting
                  equipment.
                </li>
                <li>Hourly booking rates for your convenience.</li>
                <li>
                  Baseball training KIT – (bat, gloves and helmet) available for
                  rent.
                </li>
                <li>Emergency first aid on site.</li>
                <li>
                  Sports gear shop stocked with everything you need to succeed
                  with Baseball.
                </li>
                <li>
                  Baseball certified trainers available upon prior booking.
                </li>
                <li>Exclusive membership offers for regular visitors.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {facilityCage === "softball cage" && (
        <div className="space-y-7">
          <h2 className="font-semibold lg:text-3xl text-2xl lg:leading-7 leading-6">
            Softball Cage
          </h2>
          <div className="sm:space-y-6 space-y-5">
            <p className="lg:text-lg text-[#777777] leading-6">
              Our softball batting cage is designed with all safety equipment to
              master your skills stress-free. With three full-length batting
              lanes and automatic/manual pitching machines, the cage is perfect
              for players of all levels, providing a unique and comfortable
              environment complete with all the amenities you need for a
              successful training session. Book your spot in our batting cage
              today and start perfecting your softball skills.
            </p>
            <div className="space-y-4">
              <p className="lg:text-xl text-lg leading-6">
                Here's how we can provide a secured training for you:
              </p>
              <ul className="space-y-3 ms-5 lg:text-lg text-[#777777]">
                <li>Automatic pitching machines.</li>
                <li>
                  Pitching mats, Hitting mats /mounts and power batting
                  equipment.
                </li>
                <li>Hourly booking rates for your convenience.</li>
                <li>
                  Softball training KIT – (bat, gloves, screens, and helmet)
                  available for rent.
                </li>
                <li>Emergency first aid on site.</li>
                <li>
                  Sports gear shop stocked with everything you need to succeed
                  with Baseball.
                </li>
                <li>
                  Softball certified trainers available upon prior booking.
                </li>
                <li>
                  Exclusive membership offers for regular visitors (Sign up
                  required).
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {facilityCage === "hockey cage" && (
        <div className="space-y-7">
          <h2 className="font-semibold lg:text-3xl text-2xl lg:leading-7 leading-6">
            Hockey Cage
          </h2>
          <div className="sm:space-y-6 space-y-5">
            <p className="lg:text-lg text-[#777777] leading-6">
              The open field supports through exclusive training programs to
              reproduce/mimic game situations, drills to meet real-time
              experience, and accommodates practice sessions focused on specific
              drills to improve technical skills of the specialized sport. The
              field can also be utilized for a casual game with your team, and
              we have you covered with all equipment and sporting gear readily
              available for rent. The open indoor field at Prostrikers is also
              available for multiple indoor sports activities such as Baseball,
              Softball, futsal/Soccer, field hockey, and cricket.
            </p>
            <div className="space-y-4">
              <p className="lg:text-xl text-lg leading-6">
                How we make your game better:
              </p>
              <ul className="space-y-3 ms-5 lg:text-lg text-[#777777]">
                <li>
                  Standardized Synthetic turf built for indoor sports such as
                  futsal/soccer, softball, and field hockey.
                </li>
                <li>Online streaming for activities and games.</li>
                <li>Inbuilt nets to prevent injuries for players.</li>
                <li>Field Size 2: 90 X 36.</li>
                <li>Hourly booking rates.</li>
                <li>
                  Futsal / Soccer and field hockey goals can be made available.
                </li>
                <li>
                  Field training kits available for other sports on rent
                  (Baseball, Softball, and Cricket).
                </li>
                <li>Rental packages for practice, leagues, and tournaments.</li>
                <li>Emergency first aid.</li>
                <li>
                  Field Hockey training with a certified trainer (available upon
                  request).
                </li>
                <li>Sports gear shop.</li>
                <li>Exclusive membership offers.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {facilityCage === "soccer cage" && (
        <div className="space-y-7">
          <h2 className="font-semibold lg:text-3xl text-2xl lg:leading-7 leading-6">
            Soccer Cage
          </h2>
          <div className="sm:space-y-6 space-y-5">
            <p className="lg:text-lg text-[#777777] leading-6">
              The open field supports through exclusive training programs to
              reproduce/mimic game situations, drills to meet real-time
              experience, and accommodates practice sessions focused on specific
              drills to improve technical skills of the specialized sport. The
              field can also be utilized for a casual game with your team, and
              we have you covered with all equipment and sporting gear readily
              available for rent. The open indoor field at Prostrikers is also
              available for multiple indoor sports activities such as Baseball,
              Softball, futsal/Soccer, field hockey, and cricket.
            </p>
            <div className="space-y-4">
              <p className="lg:text-xl text-lg leading-6">
                How we make your game better:
              </p>
              <ul className="space-y-3 ms-5 lg:text-lg text-[#777777]">
                <li>
                  Standardized Synthetic turf built for indoor sports such as
                  futsal/soccer, softball, and field hockey.
                </li>
                <li>Online streaming for activities and games.</li>
                <li>Inbuilt nets to prevent injuries for players.</li>
                <li>Field Size 2: 90 X 36.</li>
                <li>Hourly booking rates.</li>
                <li>
                  Futsal / Soccer and field hockey goals can be made available.
                </li>
                <li>
                  Field training kits available for other sports on rent
                  (Baseball, Softball, and Cricket).
                </li>
                <li>Rental packages for practice, leagues, and tournaments.</li>
                <li>Emergency first aid.</li>
                <li>
                  Field Hockey training with a certified trainer (available upon
                  request).
                </li>
                <li>Sports gear shop.</li>
                <li>Exclusive membership offers.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RentalDetailSection;
