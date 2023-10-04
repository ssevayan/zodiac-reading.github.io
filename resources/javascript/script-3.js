document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", function() {
        const nameInput = document.getElementById("name").value;
        const birthdateInput = new Date(document.getElementById("birthdate").value);
        const month = birthdateInput.getMonth() + 1;
        const day = birthdateInput.getDate();

        if (nameInput === "") {
            resultElement.innerHTML = "Please enter your name.";
            return;
        }

        if (birthdateInput !== "") {

            let zodiacSign;
            if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
                zodiacSign = "Aries";
            } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
                zodiacSign = "Taurus";
            } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
                zodiacSign = "Gemini";
            } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
                zodiacSign = "Cancer";
            } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
                zodiacSign = "Leo";
            } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
                zodiacSign = "Virgo";
            } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
                zodiacSign = "Libra";
            } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
                zodiacSign = "Scorpio";
            } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
                zodiacSign = "Sagittarius";
            } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
                zodiacSign = "Capricorn";
            } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
                zodiacSign = "Aquarius";
            } else {
                zodiacSign = "Pisces";
            }

            const description = getZodiacDescription(zodiacSign);
        
            function getZodiacDescription(zodiacSign) {
                switch (zodiacSign) {
                    case "Aries":
                        return "Aries individuals are known for their high energy, adventurous spirit, and determination. They are natural leaders and pioneers, always ready to take on new challenges. However, their impulsiveness and impatience can sometimes lead to conflicts and hasty decisions. In relationships, Aries can be passionate and caring partners, but their need for independence might create tensions. Aries is most compatible with Leo and Sagittarius, as they share the same fiery energy and love for excitement. They may find it challenging to get along with Cancer and Capricorn due to their differing priorities.";
                    case "Taurus":
                        return "Taurus individuals are practical, reliable, and patient. They have a strong sense of stability and are known for their determination and unwavering nature. However, their stubbornness and reluctance to change can sometimes hinder their personal growth. In relationships, Taurus partners are loyal and devoted, valuing security and comfort. They are most compatible with Virgo and Capricorn, as they share the same grounded approach to life. Taurus might face challenges with Aquarius and Leo due to their contrasting personalities.";
                    case "Gemini":
                        return "Gemini individuals are versatile, witty, and curious. They have a keen intellect and are excellent communicators, making them social butterflies. However, their restlessness and tendency to be superficial can lead to difficulties in forming deep connections. In relationships, Gemini can be charming and affectionate partners, but their indecisiveness might cause confusion. They are most compatible with Libra and Aquarius, appreciating their intellectual pursuits. Gemini may find it challenging to connect with Virgo and Pisces due to their differing communication styles.";
                    case "Cancer":
                        return "Cancer individuals are nurturing, empathetic, and deeply intuitive. They are highly sensitive and value emotional connections, often putting others' needs before their own. However, their moodiness and tendency to be clingy can create challenges in relationships. In partnerships, Cancer is caring and devoted, seeking security and stability. They are most compatible with Scorpio and Pisces, appreciating their emotional depth. Cancer might face difficulties with Aries and Sagittarius due to their contrasting emotional needs.";
                    case "Leo":
                        return "Leo individuals are confident, generous, and charismatic. They have a strong sense of self-worth and natural leadership abilities, making them stand out in any crowd. However, their pride and desire for recognition can sometimes lead to arrogance. In relationships, Leo partners are passionate and loyal, valuing love and admiration. They are most compatible with Aries and Sagittarius, sharing their fiery energy and love for excitement. Leo might find it challenging to get along with Scorpio and Taurus due to their differences in priorities.";
                    case "Virgo":
                        return "Virgo individuals are analytical, practical, and hardworking. They pay attention to detail and have a strong sense of responsibility, making them reliable partners and friends. However, their perfectionism and critical nature can lead to stress and overthinking. In relationships, Virgo is devoted and supportive, valuing stability and order. They are most compatible with Taurus and Capricorn, sharing their practical approach to life. Virgo may face challenges with Gemini and Sagittarius due to their differing attitudes towards responsibility.";
                    case "Libra":
                        return "Libra individuals are diplomatic, charming, and fair-minded. They value harmony and seek balance in all aspects of life, making them natural peacemakers. However, their indecisiveness and desire for approval can lead to challenges in making important decisions. In relationships, Libra partners are romantic and affectionate, valuing love and partnership. They are most compatible with Gemini and Aquarius, appreciating their intellectual conversations. Libra might find it challenging to connect with Cancer and Capricorn due to their differing approaches to emotional expression.";
                    case "Scorpio":
                        return "Scorpio individuals are passionate, determined, and resourceful. They have a deep sense of intuition and are not afraid of challenges, making them intense and powerful personalities. However, their secretive nature and desire for control can create trust issues. In relationships, Scorpio is loyal and committed, valuing emotional intimacy and connection. They are most compatible with Cancer and Pisces, appreciating their depth of feeling. Scorpio may face difficulties with Aquarius and Leo due to their differences in emotional expression.";
                    case "Sagittarius":
                        return "Sagittarius individuals are optimistic, adventurous, and free-spirited. They have a love for travel and a philosophical outlook on life, making them seekers of truth and knowledge. However, their restlessness and impulsiveness can lead to a lack of commitment and focus. In relationships, Sagittarius partners are open-minded and fun-loving, valuing freedom and exploration. They are most compatible with Aries and Leo, sharing their adventurous spirit. Sagittarius might find it challenging to get along with Virgo and Pisces due to their differing attitudes towards stability.";
                    case "Capricorn":
                        return "Capricorn individuals are disciplined, responsible, and practical. They have a strong sense of purpose and are dedicated to achieving their goals, making them reliable and ambitious personalities. However, their workaholic nature and tendency to be overly cautious can lead to burnout. In relationships, Capricorn is loyal and supportive, valuing commitment and security. They are most compatible with Taurus and Virgo, sharing their practical approach to life. Capricorn may face challenges with Aries and Gemini due to their differing attitudes towards responsibility.";
                    case "Aquarius":
                        return "Aquarius individuals are innovative, open-minded, and humanitarian. They value intellectual stimulation and social connections, making them forward-thinking and progressive personalities. However, their detachment and aloofness can create challenges in forming deep emotional bonds. In relationships, Aquarius partners are independent and communicative, valuing friendship and intellectual compatibility. They are most compatible with Gemini and Libra, appreciating their intellectual conversations. Aquarius might find it challenging to connect with Taurus and Scorpio due to their differing attitudes towards emotional expression.";
                    case "Pisces":
                        return "Pisces individuals are compassionate, artistic, and intuitive. They have a deep sense of empathy and are highly sensitive to the emotions of others, making them empathetic and understanding personalities. However, their escapism and tendency to be overly idealistic can lead to difficulties in facing reality. In relationships, Pisces is romantic and caring, valuing emotional connection and spiritual harmony. They are most compatible with Cancer and Scorpio, appreciating their depth of feeling. Pisces may face challenges with Sagittarius and Gemini due to their differing attitudes towards commitment.";
                    default:
                        return "Description not available.";
                }
            }

            // Redirect to ssResult.html with data as URL parameters
            window.location.href = `ssResult.html?name=${nameInput}&birthdate=${month}/${day}&zodiacSign=${zodiacSign}&description=${encodeURIComponent(description)}`;    

        } else {
            resultElement.innerHTML = "Please select your birth year.";
        }
    });
});
