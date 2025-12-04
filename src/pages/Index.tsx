import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const articles = [
    {
      id: 1,
      title: "Искусство минимализма в дизайне",
      excerpt: "Меньше — это больше. Исследуем философию простоты.",
      date: "15 ноября 2024",
      category: "Дизайн",
      image: "🎨",
      size: "large"
    },
    {
      id: 2,
      title: "Типографика будущего",
      excerpt: "Шрифты, которые изменят восприятие текста.",
      date: "10 ноября 2024",
      category: "Типографика",
      image: "✍️",
      size: "small"
    },
    {
      id: 3,
      title: "Цвет как инструмент эмоций",
      excerpt: "Психология цвета в современном веб-дизайне.",
      date: "5 ноября 2024",
      category: "Теория",
      image: "🌈",
      size: "medium"
    },
    {
      id: 4,
      title: "Анимация без границ",
      excerpt: "Создаём живые интерфейсы с помощью CSS и JS.",
      date: "1 ноября 2024",
      category: "Разработка",
      image: "⚡",
      size: "small"
    },
    {
      id: 5,
      title: "Композиция и баланс",
      excerpt: "Как расположить элементы, чтобы захватить внимание.",
      date: "28 октября 2024",
      category: "Композиция",
      image: "🔲",
      size: "medium"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold transform -rotate-12">
                B
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent italic">
                Шарофжон
              </span>
            </div>
            <div className="flex gap-6 items-center">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-slate-700 hover:text-purple-600 transition-colors font-medium"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-purple-600 transition-colors font-medium"
              >
                Обо мне
              </button>
              <a 
                href="mailto:sharofjon@example.com"
                className="text-slate-700 hover:text-purple-600 transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300/30 rounded-full blur-3xl"></div>
            <div className="absolute top-20 right-10 w-60 h-60 bg-pink-300/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-4xl">
              <div className="inline-block mb-6 px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-medium transform -rotate-2">
                ✨ Творческое пространство
              </div>
              <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-none">
                <span className="block text-slate-900">Мысли</span>
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent italic transform -rotate-1 inline-block">
                  вдохновение
                </span>
                <span className="block text-slate-900">дизайн</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
                Персональный блог Шарофжона о креативных решениях, необычных подходах и вдохновляющих идеях в мире дизайна и разработки
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => scrollToSection('articles')}
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all shadow-lg"
                >
                  Читать статьи
                  <Icon name="ArrowRight" size={20} />
                </Button>
                <Button 
                  onClick={() => scrollToSection('about')}
                  size="lg" 
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section id="articles" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="mb-12 flex items-center gap-4">
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 transform -rotate-2"></div>
            <h2 className="text-5xl font-bold text-slate-900">Последние статьи</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card
                key={article.id}
                onClick={() => navigate(`/article/${article.id}`)}
                className={`
                  group relative overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
                  ${article.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                  ${article.size === 'medium' ? 'md:row-span-1' : ''}
                  ${index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'}
                  animate-fade-in
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="p-8 relative z-10 h-full flex flex-col">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                    {article.image}
                  </div>
                  
                  <div className="inline-block mb-4 px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full w-fit">
                    {article.category}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200">
                    <span className="text-sm text-slate-500">{article.date}</span>
                    <span className="text-purple-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Читать
                      <Icon name="ArrowRight" size={16} />
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-gradient-to-br from-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium transform rotate-2">
                👨‍💻 Обо мне
              </div>
              
              <h2 className="text-6xl font-bold leading-tight">
                Привет, я
                <span className="block italic bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent transform -rotate-2 inline-block">
                  Шарофжон
                </span>
              </h2>
              
              <p className="text-xl text-purple-100 leading-relaxed">
                Дизайнер и разработчик, создающий вдохновляющий контент о креативных решениях, современных подходах в дизайне и веб-разработке.
              </p>
              
              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    🎯
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Мой опыт</h3>
                    <p className="text-purple-200">Делюсь практическими знаниями в дизайне и разработке</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    💡
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Творческий подход</h3>
                    <p className="text-purple-200">Нестандартные решения и вдохновляющие проекты</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    ✨
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Вдохновение</h3>
                    <p className="text-purple-200">Делюсь историями и инсайтами из мира дизайна</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-8xl">👨‍💻</div>
                </div>
                <div className="space-y-4 text-center">
                  <h3 className="text-3xl font-bold">Сотиболдиев Шарофжон</h3>
                  <p className="text-purple-200">Дизайнер & Разработчик</p>
                  
                  <div className="flex gap-4 justify-center pt-4">
                    <a href="mailto:sharofjon@example.com" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Icon name="Mail" size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Icon name="Github" size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Icon name="Linkedin" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold transform -rotate-12">
                  B
                </div>
                <span className="text-2xl font-bold italic">CreativeBlog</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Вдохновляем на творчество и делимся знаниями каждый день
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Навигация</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Главная
                </button>
                <button 
                  onClick={() => scrollToSection('articles')}
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Статьи
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  О блоге
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:hello@creativeblog.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <Icon name="Mail" size={20} className="group-hover:scale-110 transition-transform" />
                  hello@creativeblog.com
                </a>
                <a 
                  href="https://t.me/creativeblog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <Icon name="Send" size={20} className="group-hover:scale-110 transition-transform" />
                  Telegram
                </a>
                <a 
                  href="https://twitter.com/creativeblog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <Icon name="Twitter" size={20} className="group-hover:scale-110 transition-transform" />
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 CreativeBlog. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-slate-500 hover:text-white text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#terms" className="text-slate-500 hover:text-white text-sm transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;