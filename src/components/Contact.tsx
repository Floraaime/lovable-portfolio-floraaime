import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Linkedin, Mail, Phone, Send, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: t('contact.email'),
      value: "floraaimedesign@gmail.com",
      href: "mailto:floraaimedesign@gmail.com",
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: t('contact.phone'),
      value: "+55 83 98858-1286",
      href: "tel:+5583988581286",
    },
    {
      icon: <Linkedin className="w-8 h-8 text-primary" />,
      title: t('contact.linkedin'),
      value: "linkedin.com/in/floraaime",
      href: "https://linkedin.com/in/floraaime",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{t('contact.title')}</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              {t('contact.description')}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Lado Esquerdo: Informações de Contato */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold">{t('contact.getInTouch')}</h3>
                <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">{info.icon}</div>
                            <div>
                                <h4 className="font-semibold text-lg">{info.title}</h4>
                                <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{info.value}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lado Direito: Formulário de Mensagem */}
            <Card>
                <CardHeader>
                    <CardTitle>{t('contact.quickMessage')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <Input type="text" placeholder={t('contact.formName')} />
                        <Input type="email" placeholder={t('contact.formEmail')} />
                        <Textarea placeholder={t('contact.formMessage')} rows={5}/>
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <Button type="submit" className="w-full">
                                <Send className="w-4 h-4 mr-2" />
                                {t('contact.buttonSend')}
                            </Button>
                            <a href="https://wa.me/5583988581286?text=Olá, Flora! Gostaria de falar sobre um projeto." target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button variant="outline" className="w-full bg-green-500 text-white hover:bg-green-600 hover:text-white">
                                    <MessageSquare className="w-4 h-4 mr-2" />
                                    {t('contact.buttonWhatsapp')}
                                </Button>
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
